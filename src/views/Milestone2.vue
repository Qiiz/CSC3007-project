<template>
    <v-container>
        <div id="scatter-plot"></div>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as d3 from 'd3'

@Component({
    components: {

    },
})
export default class Milestone2 extends Vue
{
    async mounted()
    {
        const margin = { top: 10, right: 30, bottom: 30, left: 60 },
            width = 1280 - margin.left - margin.right,
            height = 720 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        const svg = d3.select("#scatter-plot")
            .append("svg")
            .attr("viewBox", [-margin.left, -margin.top, width + margin.left + margin.right, height + margin.top + margin.bottom])
            .append("g")

        //Read the data
        const data = await d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv")

        // Add X axis
        const x = d3.scaleLinear()
            .domain([0, 4000])
            .range([0, width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        // Add Y axis
        const y = d3.scaleLinear()
            .domain([0, 500000])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        // Add dotsSW
        svg.append('g')
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", (d) => x(Number(d.GrLivArea)))
            .attr("cy", (d) => y(Number(d.SalePrice)))
            .attr("r", 1.5)
            .style("fill", "#69b3a2")
    }
}
</script>