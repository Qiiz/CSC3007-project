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
                    <g v-for="item in filteredExercise" :key="`${item.name}`">
                        <text
                            dominant-baseline="middle"
                            text-anchor="middle"
                            :font-size="`64px`"
                            :style="`font-weight: 1000; opacity: 0.5`"
                            :x="scalerClippedX(item.position)"
                            :y="scalerY(280)">
                            30 Mins
                        </text>

                        <image :href="item.icon"
                            :x="scalerClippedX(item.position)"
                            :y="scalerY(200)"
                            :width="100"
                            :height="100"
                            :style="`opacity: 0.5`"
                            :transform="`translate(-${100 / 2} -${100 / 2})`" />
                    </g>
                    <g v-for="item in filteredBeverages" :key="`${item.name}`"
                        :style="`opacity: ${focusInMind(item) ? 1 : 0.1}`"
                        @mouseover="onHover(item)" @mouseleave="onLeave(item)">
                        <rect
                            :x="scalerClippedX(item.calories)"
                            :y="scalerY(clipY(item.caffeine))"
                            :rx="iconSize" :ry="iconSize" :width="iconSize" :height="iconSize"
                            :transform="`translate(${-iconSize / 2},  ${-iconSize / 2})`"
                            :style="`fill: LightGray; opacity: 1; stroke: grey; stroke-width: 1`" />
                        <image :href="item.icon"
                            :x="scalerClippedX(item.calories)"
                            :y="scalerY(clipY(item.caffeine))"
                            :width="iconSize - iconPadding"
                            :height="iconSize - iconPadding"
                            :transform="`translate(-${(iconSize - iconPadding) / 2} -${(iconSize - iconPadding) / 2})`" />
                    </g>
                    <g v-for="item in filteredBeverages" :key="`${item.name}_text`">
                        <text v-if="hoveringBeverage.find(x => x.name === item.name) || (inMind.length > 0 && focusInMind(item))"
                            dominant-baseline="middle"
                            text-anchor="middle"
                            :font-size="`${iconFontSize}px`"
                            :style="`font-weight: 1000;`"
                            :x="scalerClippedX(item.calories)"
                            :y="scalerY(clipY(item.caffeine) - iconSize / 1.5)">
                            {{ item.name }}
                        </text>
                    </g>

                    <g v-if="hoveringBeverage.length > 0">
                        <rect
                            :x="scalerClippedX(hoveringBeverage[0].calories)"
                            :y="scalerY(0)"
                            :rx="4" :ry="4" :width="24" :height="16"
                            :transform="`translate(${-24 / 2},  ${0})`"
                            :style="`fill: black; opacity: 1;`" />

                        <text
                            :x="scalerClippedX(hoveringBeverage[0].calories)"
                            :y="scalerY(0)"
                            dominant-baseline="middle"
                            text-anchor="middle"
                            :transform="`translate(${0},  ${8})`"
                            :font-size="`9px`"
                            :style="`fill:white;`">
                            {{ hoveringBeverage[0].calories }}
                        </text>

                        <rect
                            :x="scalerClippedX(0)"
                            :y="scalerY(hoveringBeverage[0].caffeine)"
                            :rx="4" :ry="4" :width="24" :height="16"
                            :transform="`translate(${-24 * 1.5},  ${-8})`"
                            :style="`fill: black; opacity: 1;`" />
                        <text
                            :x="scalerClippedX(0)"
                            :y="scalerY(hoveringBeverage[0].caffeine)"
                            dominant-baseline="middle"
                            text-anchor="middle"
                            :transform="`translate(${-24},  ${0})`"
                            :font-size="`9px`"
                            :style="`fill:white;`">
                            {{ hoveringBeverage[0].caffeine }}
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
                    :items="beverageData.map(x => x.name).sort()"
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
import { Exercise, Exercises } from '../data/Exercises'

@Component({
    components: {

    },
})
export default class Milestone2 extends Vue
{
    public trackingMode = false
    public targetGoal = 100
    public inMind: string[] = []

    public beverageData = Beverages
    public exerciseData = Exercises

    public d3Loaded = false;
    public iconSize = 24
    public iconPadding = 8
    public iconFontSize = 16

    public scalerClippedX!: (x: number) => number
    public scalerY!: d3.ScaleLinear<number, number, never>

    public hoveringBeverage: Beverage[] = []

    public get filteredBeverages()
    {
        if (!this.trackingMode)
        {
            return this.beverageData
        }
        return this.beverageData.filter(x => x.calories <= this.targetGoal)
    }

    public get filteredExercise()
    {
        if (!this.trackingMode)
        {
            return this.exerciseData
        }

        return this.exerciseData.filter((x, i) =>
        {
            if (i == 0)
            {
                return true
            }
            if (this.exerciseData[i - 1].calories < this.targetGoal)
            {
                return true
            }
            else
            {
                return false
            }
        })
    }

    public focusInMind(item: Beverage)
    {
        if (this.hoveringBeverage.length > 0)
        {
            let hover = this.hoveringBeverage.includes(item)
            if (this.inMind.length == 0)
            {
                return hover
            }
            return hover || this.inMind.includes(item.name)
        }
        else
        {
            if (this.inMind.length == 0)
            {
                return true
            }
            return this.inMind.includes(item.name)
        }

    }

    public clipY(value: number)
    {
        return value < 30 ? 30 : value
    }

    onHover(item: Beverage)
    {
        // console.log("hover", item.name)
        this.hoveringBeverage.push(item)
    }

    onLeave(item: Beverage)
    {
        this.hoveringBeverage = []
    }

    async mounted()
    {
        this.d3Loaded = false
        const margin = { top: 10, right: 60, bottom: 50, left: 60 },
            width = 1280 - margin.left - margin.right,
            height = 480 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        const svg = d3.select("#scatter-plot-container > svg")
            .attr("viewBox", [-margin.left, -margin.top, width + margin.left + margin.right, height + margin.top + margin.bottom])

        // Add X axis
        const x = d3.scaleLinear()
            .domain([0, 450])
            .range([0, width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        // Add Y axis
        const y = d3.scaleLinear()
            .domain([0, 300])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        this.scalerClippedX = (value: d3.NumberValue) =>
        {
            const out = x(value)
            const clip = this.iconSize / 2
            return out < clip ? clip : out
        }

        this.scalerY = y

        svg.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", height)
            .attr("dy", "2em")
            .text("Calories Intake")

        svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("y", 0)
            .attr("dy", "-2em")
            .attr("transform", "rotate(-90)")
            .text("Caffeine Intake");

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