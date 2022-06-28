<template>
    <v-container fluid>
        <MainBody
            :msg="
                'Crime Rate in Singapore for Year: ' +
                (years.length > 0 ? years[selectedYearIndex] : 'Loading...')
            "
        />
        <div v-if="loaded">
            <v-row>
                <v-col cols="12" sm="12" md="10">
                    <div id="my_dataviz"></div
                ></v-col>
                <v-col cols="12" sm="12" md="2">
                    <p>Catergories</p>
                    <v-checkbox
                        v-for="item of types"
                        v-bind:key="item"
                        v-model="selected"
                        :label="item"
                        color="red darken-4"
                        :value="item"
                        hide-details
                    ></v-checkbox>

                    <br />

                    <v-btn elevation="2" color="primary" @click="selectAll()">
                        Select All
                    </v-btn>

                    <br />
                    <br />
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" sm="12">
                    <v-slider
                        v-model="selectedYearIndex"
                        :tick-labels="years"
                        :max="years.length - 1"
                        step="1"
                        ticks="always"
                        tick-size="4"
                    ></v-slider>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>


<script lang="ts">
    import * as d3 from "d3";
    import MainBody from '@/components/MainBody.vue'; // @ is an alias to /src
    import { CrimeData } from '@/model/CrimeData';
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

    function onlyUnique(value: any, index: any, self: string | any[])
    {
        return self.indexOf(value) === index;
    }

    @Component({
        components: {
            MainBody
        }
    })
    export default class CrimeChart extends Vue
    {
        @Prop() private responseData: CrimeData | undefined;

        selectedYearIndex = 0

        loaded = false

        tranformedData: {
            type: string,
            value: number,
            year: number
        }[] | undefined

        earliestYear: number | undefined
        latestYear: number | undefined
        types: string[] = []


        selected: string[] = []

        get yearData(): { type: string; value: number; year: number; }[]
        {
            if (!this.tranformedData)
            {
                return []
            }
            return this.tranformedData.filter(x => x.year === this.years[this.selectedYearIndex]).sort((a, b) => a.type.localeCompare(b.type))
        }

        years: number[] = []

        updateChart = () => { return }

        @Watch('responseData')
        onDataChanged()
        {
            this.loaded = false
            const records = this.responseData?.result?.records
            if (!records)
            {
                alert("Bad response")
                return;
            }

            this.tranformedData = records.map(x => ({
                type: x.level_2,
                value: Number(x.value),
                year: Number(x.year)
            }))

            this.loaded = true

            this.earliestYear = Math.min(...this.tranformedData.map(x => x.year))
            this.latestYear = Math.max(...this.tranformedData.map(x => x.year))
            this.types = this.tranformedData.map(x => x.type).filter(onlyUnique).sort((a, b) => a.localeCompare(b))
            this.years = this.tranformedData.map(x => x.year).filter(onlyUnique)
            console.log("min", this.earliestYear, "max", this.latestYear, "types", this.types)

            this.selectedYearIndex = this.years.length - 1

            this.selected = this.types.slice()

            Vue.nextTick(() => this.loadChart())
        }

        selectAll()
        {
            this.selected = this.types
        }

        mounted()
        {
            if (this.responseData?.result?.records)
            {
                this.onDataChanged()
            }
        }

        @Watch('selectedYearIndex')
        onYearChanged()
        {
            this.updateChart()
        }

        @Watch('selected')
        onSelectedChange()
        {
            this.updateChart()
        }

        loadChart()
        {
            console.log("Loading chart", this.yearData)

            var margin = { top: 30, right: 120, bottom: 100, left: 120 },
                width = 1600 - margin.left - margin.right,
                height = 640 - margin.top - margin.bottom;

            var svg = d3.select("#my_dataviz")
                .append("svg")
                .attr("viewBox", [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom])
                .attr("style", "max-width: 100%; height: auto; ")
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            var x = d3.scaleBand()
                .range([0, width])
                .padding(0.2);
            var xAxis = svg.append("g")
                .attr("transform", "translate(0," + height + ")")


            var y = d3.scaleLinear()
            var yAxis = svg.append("g")
                .attr("class", "myYaxis")


            function update(data: { type: string; value: number; year: number; }[], filter: string[])
            {
                data = data.filter(x => filter.includes(x.type))

                x.domain(data.map(d => d.type))
                xAxis.call(d3.axisBottom(x))
                    .selectAll("text")
                    .attr("transform", "translate(-10,0)rotate(-20)")
                    .style("font-size", "14px")
                    .style("text-anchor", "end")


                y.domain([1, d3.max(data, d => d.value) ?? 5000]).range([height, 0]);
                yAxis.transition().duration(333).call(d3.axisLeft(y));

                var u = svg.selectAll("rect")
                    .data(data)

                u.enter()
                    .append("rect")
                    .merge(u as unknown as any)
                    .transition()
                    .duration(333)
                    .attr("x", (d: { type: string; value: number; year: number; }) => x(d.type) as number)
                    .attr("y", (d: { type: string; value: number; year: number; }) => y(d.value))
                    .attr("width", x.bandwidth())
                    .attr("height", (d) => height - y(d.value))
                    .attr("fill", "#b71c1c")

                u.exit()
                    .remove()
            }
            this.updateChart = () => update(this.yearData, this.selected)

            this.updateChart()
        }
    }
</script>
