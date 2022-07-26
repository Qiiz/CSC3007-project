<template>
    <v-container>
        <v-row>
            <v-col cols="12" offset-sm="3" sm="6">
                <div class="text-h4 text-center">Calories/Caffeine Tracking</div>
            </v-col>
            <v-col offset-sm="1" sm="2">
                <v-switch
                    v-model="trackingMode"
                    inset
                    dense
                    class="v-input--reverse v-input--expand">
                    <template #label>
                        <span>
                            Tracking Mode
                        </span>
                    </template>
                </v-switch>
            </v-col>
        </v-row>
        <div id="scatter-plot-container">
            <svg>
                <g v-if="d3Loaded">
                    <g v-for="item in filteredData" :key="`${item.caffeine} ${item.calories}`"
                        :style="`opacity: ${focusInMind(item) ? 1 : 0.1}`">
                        <rect
                            :x="scalerX(item.caffeine)"
                            :y="scalerY(item.calories)"
                            :rx="8" :ry="8" :width="iconSize" :height="iconSize"
                            :transform="`translate(${-iconSize / 2},  ${-iconSize / 2})`"
                            :style="`fill: grey; opacity: 0.5; stroke: black; stroke-width: 1`" />
                        <image :href="item.icon"
                            :x="scalerX(item.caffeine)"
                            :y="scalerY(item.calories)"
                            :width="iconSize - iconPadding"
                            :height="iconSize - iconPadding"
                            :transform="`translate(-${(iconSize - iconPadding) / 2} -${(iconSize - iconPadding) / 2})`" />
                        <text
                            :key="`${item.caffeine} ${item.calories}`"
                            dominant-baseline="middle"
                            text-anchor="middle"
                            :font-size="`${iconFontSize}px`"
                            :x="scalerX(item.caffeine)"
                            :y="scalerY(item.calories - iconSize)">
                            {{ item.name }}
                        </text>
                    </g>
                </g>
            </svg>
        </div>
        <v-row>
            <v-col col="12" sm="6">
                <v-slider v-if="trackingMode"
                    v-model="targetGoal"
                    max="500"
                    min="100"
                    step="10"
                    thumb-label="always"
                    label="Calories Goal"
                    hint="Slide to target recommended exercises">
                </v-slider>
            </v-col>
            <v-col col="12" sm="6">
                <v-autocomplete
                    v-model="inMind"
                    chips
                    clearable
                    dense
                    multiple
                    hide-selected
                    rounded
                    small-chips
                    solo
                    :items="data.map(x => x.name).sort()"
                    label="Have a beverage in mind?">
                </v-autocomplete>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as d3 from 'd3'

import { Beverage, Beverages } from '../data/Beverages'

@Component({
    components: {

    },
})
export default class Milestone2 extends Vue
{
    public trackingMode = false
    public targetGoal = 100
    public inMind = []

    public data = Beverages

    public d3Loaded = false;
    public iconSize = 48
    public iconPadding = 16
    public iconFontSize = 10

    public scalerX!: d3.ScaleLinear<number, number, never>
    public scalerY!: d3.ScaleLinear<number, number, never>

    public get filteredData()
    {
        if (!this.trackingMode)
        {
            return this.data
        }
        return this.data.filter(x => x.calories <= this.targetGoal)
    }

    public focusInMind(item: Beverage)
    {
        if (this.inMind.length == 0) {
            return true
        }
        return !!this.inMind.find(x => x === item.name) 
    }

    async mounted()
    {
        this.d3Loaded = false
        const margin = { top: 50, right: 60, bottom: 50, left: 60 },
            width = 1280 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        const svg = d3.select("#scatter-plot-container > svg")
            .attr("viewBox", [-margin.left, -margin.top, width + margin.left + margin.right, height + margin.top + margin.bottom])


        // Add X axis
        this.scalerX = d3.scaleLinear()
            .domain([0, 300])
            .range([0, width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(this.scalerX));

        // Add Y axis
        this.scalerY = d3.scaleLinear()
            .domain([0, 600])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(this.scalerY));

        svg.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", height)
            .attr("dy", "2em")
            .text("Caffeine Intake")

        svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("y", 0)
            .attr("dy", "-2em")
            .attr("transform", "rotate(-90)")
            .text("Calories Intake");

        this.d3Loaded = true
    }
}
</script>

<style lang="scss">
// Toggle Switch Label to left 
.v-input--reverse .v-input__slot {
    flex-direction: row-reverse;
    justify-content: flex-end;

    .v-application--is-ltr & {
        .v-input--selection-controls__input {
            margin-right: 0;
            margin-left: 8px;
        }
    }

    .v-application--is-rtl & {
        .v-input--selection-controls__input {
            margin-left: 0;
            margin-right: 8px;
        }
    }
}

.v-input--expand .v-input__slot {

    // justify-content: space-between;
    .v-label {
        display: block;
        flex: 1;
    }
}
</style>