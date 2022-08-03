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
            <svg :viewBox="[
            -svgProperties.margin.left,
            -svgProperties.margin.top,
            svgProperties.width + svgProperties.margin.left + svgProperties.margin.right,
            svgProperties.height + svgProperties.margin.top + svgProperties.margin.bottom]">
                <g id="scatter-plot-axis" @click="onUnclickBeverage()"></g>
                <g>
                    <g v-for="item in filteredExercise" :key="`${item.name}`" @click="onUnclickBeverage()">
                        <rect
                            :width="svgProperties.width"
                            :height="svgProperties.height"
                            opacity="0" />
                        <text
                            dominant-baseline="middle"
                            text-anchor="middle"
                            opacity="0.5"
                            :font-size="`64px`"
                            :style="`font-weight: 1000`"
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
                    <!-- Beverages -->
                    <g v-for="item in filteredBeverages" :key="`${item.name}`"
                        :style="`opacity: ${(hoverBeverage !== null ? hoverBeverage === item : focusBeverageInMind(item)) ? 1 : 0.1}`"
                        :transform="`translate(${scalerClippedX(item.calories)} ${scalerY(clipY(item.caffeine))}) scale(${(hoverBeverage === item || (beverageInMind.length > 0 && focusBeverageInMind(item))) ? 1.5 : 1})`"
                        @mouseover="onHoverOnBeverage(item)" @mouseleave="onHoverLeaveBeverage(item)" @click="onClickBeverage(item)">
                        <rect
                            :rx="iconSize" :ry="iconSize" :width="iconSize" :height="iconSize"
                            :transform="`translate(${-iconSize / 2},  ${-iconSize / 2})`"
                            :style="`fill: LightGray; opacity: 1; stroke: grey; stroke-width: 1`" />
                        <image :href="item.icon"
                            :width="iconSize - iconPadding"
                            :height="iconSize - iconPadding"
                            :transform="`translate(-${(iconSize - iconPadding) / 2} -${(iconSize - iconPadding) / 2})`" />
                        <text v-if="hoverBeverage === item || (beverageInMind.length > 0 && focusBeverageInMind(item))"
                            :y="(iconSize)"
                            dominant-baseline="middle"
                            text-anchor="middle"
                            :font-size="`${iconFontSize}px`"
                            :style="`font-weight: 1000;`">
                            {{ item.name }}
                        </text>
                    </g>

                    <!-- Focus Crosshair label -->
                    <g v-if="hoverBeverage !== null">
                        <!-- x axis  -->
                        <rect
                            :x="scalerClippedX(hoverBeverage.calories)"
                            :y="scalerY(0)"
                            :rx="4" :ry="4" :width="24" :height="16"
                            :transform="`translate(${-24 / 2},  ${0})`"
                            :style="`fill: black; opacity: 1;`" />

                        <text
                            :x="scalerClippedX(hoverBeverage.calories)"
                            :y="scalerY(0)"
                            dominant-baseline="middle"
                            text-anchor="middle"
                            :transform="`translate(${0},  ${8})`"
                            :font-size="`9px`"
                            :style="`fill:white;`">
                            {{ hoverBeverage.calories }}
                        </text>
                        <!-- y axis -->
                        <rect
                            :x="scalerClippedX(0)"
                            :y="scalerY(hoverBeverage.caffeine)"
                            :rx="4" :ry="4" :width="24" :height="16"
                            :transform="`translate(${-24 * 1.5},  ${-8})`"
                            :style="`fill: black; opacity: 1;`" />
                        <text
                            :x="scalerClippedX(0)"
                            :y="scalerY(hoverBeverage.caffeine)"
                            dominant-baseline="middle"
                            text-anchor="middle"
                            :transform="`translate(${-24},  ${0})`"
                            :font-size="`9px`"
                            :style="`fill:white;`">
                            {{ hoverBeverage.caffeine }}
                        </text>
                    </g>
                </g>
            </svg>
        </div>
        <v-row>
            <v-col cols="12" sm="6">
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
            <v-col cols="12" sm="6">
                <v-autocomplete
                    v-model="beverageInMind"
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
    public beverageInMind: string[] = []

    public beverageData = Beverages
    public exerciseData = Exercises

    public iconSize = 24
    public iconPadding = 8
    public iconFontSize = 16

    public scalerClippedX!: (x: number) => number
    public scalerX: d3.ScaleLinear<number, number, never>;
    public scalerY: d3.ScaleLinear<number, number, never>

    public svgProperties: { margin: { top: number; right: number; bottom: number; left: number; }; width: number; height: number; };

    public hoverBeverage: Beverage | null = null
    public clickBeverage: Beverage | null = null

    constructor()
    {
        super()
        const margin = { top: 10, right: 60, bottom: 50, left: 60 },
            width = 1280 - margin.left - margin.right,
            height = 480 - margin.top - margin.bottom;

        this.svgProperties = {
            margin,
            width,
            height
        }

        // append the svg object to the body of the page

        // .attr("viewBox", [-margin.left, -margin.top, width + margin.left + margin.right, height + margin.top + margin.bottom])

        this.scalerX = d3.scaleLinear()
            .domain([0, 450])
            .range([0, this.svgProperties.width]);

        this.scalerY = d3.scaleLinear()
            .domain([0, 300])
            .range([this.svgProperties.height, 0]);

        this.scalerClippedX = (value: d3.NumberValue) =>
        {
            const out = this.scalerX(value)
            const clip = this.iconSize / 2
            return out < clip ? clip : out
        }
    }

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

    public focusBeverageInMind(item: Beverage)
    {
        if (this.hoverBeverage !== null)
        {
            const output = item === this.hoverBeverage
            if (this.beverageInMind.length == 0)
            {
                return output
            }
            return output || this.beverageInMind.includes(item.name)
        }
        else
        {
            if (this.beverageInMind.length == 0)
            {
                return true
            }
            return this.beverageInMind.includes(item.name)
        }

    }

    public clipY(value: number)
    {
        return value < 30 ? 30 : value
    }

    onHoverOnBeverage(item: Beverage)
    {
        if (this.clickBeverage !== null)
        {
            return
        }
        this.hoverBeverage = item
    }

    onHoverLeaveBeverage(item: Beverage)
    {
        if (this.clickBeverage !== null)
        {
            return
        }
        this.hoverBeverage = null
    }

    onClickBeverage(item: Beverage)
    {
        if (this.clickBeverage === item) {
            this.onUnclickBeverage()
            return
        }
        this.hoverBeverage = item
        this.clickBeverage = item
    }

    onUnclickBeverage()
    {
        this.hoverBeverage = null
        this.clickBeverage = null
    }

    created()
    {
        console.log("created Milestone2 Dashboard")
    }

    async mounted()
    {
        console.log("mounted Milestone2 Dashboard")

        const svg = d3.select("#scatter-plot-container > svg")
        const axisGroup = svg.select("#scatter-plot-axis")

        // Add X axis
        axisGroup.append("g")
            .attr("transform", "translate(0," + this.svgProperties.height + ")")
            .call(d3.axisBottom(this.scalerX));

        // Add Y axis
        axisGroup.append("g")
            .call(d3.axisLeft(this.scalerY));

        axisGroup.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", this.svgProperties.width)
            .attr("y", this.svgProperties.height)
            .attr("dy", "2em")
            .text("Calories Intake")

        axisGroup.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("y", 0)
            .attr("dy", "-2em")
            .attr("transform", "rotate(-90)")
            .text("Caffeine Intake");
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