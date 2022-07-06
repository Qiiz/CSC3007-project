<template>
    <div class="text-justify">
        <v-container style="max-width: 1280px">
            <v-row>
                <v-col class="sm-12">
                    <h1>Visualisation Approach 1</h1>

                    <p>
                        <a href="https://informationisbeautiful.net/visualizations/caffeine-and-calories/" target="_blank">
                            https://informationisbeautiful.net/visualizations/caffeine-and-calories/</a>
                    </p>
                    <a href="img/2552_Buzz-vs-Bulge-4.png" target="_blank">
                        <v-img max-width="1024" src="img/2552_Buzz-vs-Bulge-4.png" alt="caffeine-and-calories"></v-img>
                    </a>

                    <h3>Static Infographic</h3>

                    <h2>
                        Domain
                    </h2>

                    <p>
                        There is a difference in understanding the visualisation between the artist and the user.
                        At a glance, we can observe that the artist assumes that the user is trying to determine which beverages
                        they should consume based on their calories or caffeine level.
                        However, calorie tracking is not just for losing weight.
                        Some users are interested in this dataset to track calories for gaining and maintaining weight as well.
                        Take note that the visualisation is targeted more at users with the intention of tracking calories or caffeine levels to determine the beverage.
                    </p>
                    <p>
                        However, apart from the targeted audience,
                        there are another group of users who are trying to determine the calories or caffeine based on their favourite beverage
                        (which is the inverse of what the artist assumed).
                        Note that the data representation is not catered for users with this approach as a filter to the beverage was not provided.
                        With the types of exercise dataset given,
                        there may also be a group of users that would like to determine the equivalent exercise to burn off the calories from the beverages consumed.
                    </p>

                    <h2>
                        Data
                    </h2>

                    <p>
                        Quantitative data for the food/drink items, Ratio scaled.
                        In units of Calories for energy and Milligrams for Caffeine.
                        <a href="https://docs.google.com/spreadsheets/d/1KYMUjrCulPtpUHwep9bVvsBvmVsDEbucdyRZ5uHCDxw/" target="_blank">Dataset</a>
                        received statically in rows.
                    </p>

                    <h2>Task</h2>
                    <p>
                        Data is mostly presented by scattering single servings of food or beverage on a plot consisting of the X and Y axis, caffeine vs calories.
                    </p>

                    <p>
                        <b>Input:</b> Caffeine & Calories level of a single serving (mostly) of an item.
                    </p>

                    <p>
                        <b>Output:</b> Suitable food or beverage to consume and the what kind of exercise to work on
                    </p>

                    <p>
                        <b>Why:</b>Allows users to be more aware and track their caffeine vs calorie consumption, as well as to explore more variety of food and beverage options
                    </p>

                    <p>
                        <b>Actions:</b>
                    <ul>
                        <li> <b>Consume:</b> Present for decision making</li>
                        <li> <b>Search:</b> Lookup (Found drink, lookup for the caffeine/calories values and suitable exercise) & Browse (Input caffeine and calories, find drink)</li>
                        <li><b>Query:</b> Identify, lookup drink for their caffeine/calories and exercise characteristics, </li>
                    </ul>
                    </p>

                    <p>
                        <b><u>Inconsistency:</u></b>
                        Some items presented are not consistent with the one serving approach; for example,
                        there is one can of coke and also 1 litre of coke found in the chart,
                        along with an additional gauge to the calorie burn of executing certain forms of exercises.
                        Additionally, there is also the existence of non-beverage items such as the chocolate bar and painkiller pills.
                    </p>

                    <h2>Idiom</h2>

                    <p><b>Encode:</b> Separate, items are arranged separately based on the values of their characteristics
                    </p>
                    <p><b>Manipulate:</b> Select and Navigating
                    </p>
                    <p><b>Facet:</b> Partitioning, partition items based on the exercise recommended.</p>

                    <p>
                        The infographic is presented in a way where it would be easier for the user to locate the caffeinated beverages
                        they can consume based on the exercise they could do to burn off the calories.
                        However, there are also users that would want to find out the caffeine/calories intake based on their favourite beverage
                        or explore the trends in the caffeinated beverages they could hit their calories target.
                        The point origin of the axis makes it hard to fulfil the needs mentioned as they do not start from 0.
                        Anything that is below the horizontal axis seems to be perceived as a “healthier” option.
                        Very poor justifications for why the axis is started off at such random positions. (Encoding issue)
                    </p>

                    <h2>Prototype</h2>
                    <p>
                        With the above issue, our team has come out with the following prototype to represent the data better.
                        One of the main concerns stated was the lack of user interaction to cater for the different groups of users.
                        Therefore, we have come out with a chart diagram with filtering functionality to assist users better in tracking the beverage based on their specific needs.
                    </p>

                    <a href="img/v1_prototype1.png" target="_blank">
                        <v-img max-width="1024" src="img/v1_prototype1.png" alt="v1_prototype1.png"></v-img>
                    </a>

                    <a href="img/v1_prototype2.png" target="_blank">
                        <v-img max-width="1024" src="img/v1_prototype2.png" alt="v1_prototype2.png"></v-img>
                    </a>

                    <a href="img/v1_prototype3.png" target="_blank">
                        <v-img max-width="1024" src="img/v1_prototype3.png" alt="v1_prototype3.png"></v-img>
                    </a>
                </v-col>
            </v-row>

            <v-row>
                <v-divider></v-divider>
            </v-row>
            <v-row>
                <v-col class="sm-12">
                    <h1>Visualisation Approach 2</h1>

                    <p>
                        <a href="https://informationisbeautiful.net/visualizations/uk-government-spending-incomes-outcomes/" target="_blank">
                            https://informationisbeautiful.net/visualizations/uk-government-spending-incomes-outcomes/</a>
                    </p>
                    <a href="img/2552_UK-Government-Spending.png" target="_blank">
                        <v-img max-width="1024" src="img/2552_UK-Government-Spending.png" alt="2552_UK-Government-Spending.png"></v-img>
                    </a>

                    <h3>Static Infographic</h3>

                    <h2>
                        Domain
                    </h2>

                    <p>
                        The domain situation was interpreted correctly by the artist by showing the distribution between the income and expenditures of the UK government.
                    </p>

                    <h2>
                        Data
                    </h2>

                    <p>
                        Ratio of UK national financial budget income and spending into Categories
                    </p>

                    <p>
                        Static <a href="https://docs.google.com/spreadsheets/d/1UZK9gBSY68KxGqP3cwY6-9f7CxqP7WnCIlTxuDzcRT4/" target="_blank">data</a> 
                        from rows of data in tables.
                    </p>

                    <h2>Task</h2>
                    <p>
                        The artists are showing components of a category and also the summation of the monies in categorisation.
                        For example, in the “Wealth & Income Tax” leaf,
                        we will assume that the 221 billion is the summation of all the other smaller leaf nodes with the same shade of brown.
                    </p>

                    <p>
                        <b>Input:</b> Category breakdown of income and outgoing in terms of monies
                    </p>

                    <p>
                        <b>Output:</b> Visualisation of differences in income and outgoing
                    </p>
                    <p>
                        <b>Why:</b> Allow the reader to have an overview of the difference in incomes and outgoing expenses,
                        as well as to determine the financial breakdown of each category.
                    </p>
                    <p>
                        <b>Actions:</b>
                    <ul>
                        <li> <b>Consume:</b> Discover and Enjoy</li>
                        <li> <b>Search:</b> Explore</li>
                        <li><b>Query:</b> Explore </li>
                    </ul>
                    </p>

                    <p>
                        <b><u>Problems:</u></b>
                        It is not always the case for the summation of smaller leaf nodes, for example,
                        the calculation seems to be the summation of an unknown amount of income tax and the corporation tax.
                        Therefore, the data do not add up and do not make sense.
                    </p>

                    <h2>Idiom</h2>

                    <p><b>Map:</b> Color based on the incoming and outgoing, size based on the sum spend/received and curvature based on the breakdown of the spending.
                    </p>
                    <p><b>Manipulate:</b> Navigating
                    </p>
                    <p><b>Facet:</b> Embedding</p>

                    <p>
                        This is a tree dataset in the hierarchy of budget breakdowns.
                        The data is presented in the format where each branch represents one sector of the breakdown.
                        With that said, it is difficult to visualise the content of directories when there are too many child nodes.
                        It would not be an effective method for visualisation if the information were to scale as it may cause an overloading of information and confuse the reader.
                    </p>

                    <p>
                        Not only that, the culmination of values in different branches is not consistent.
                        The representation of values may be difficult for readers to comprehend while dealing with big numbers.
                        It is also difficult for users to understand which values are the summation of the final node.
                    </p>

                    <h2>Prototype</h2>
                    <p>
                        With the above issue, our team has come out with the following prototype to better represent the data. 
                        To better represent the data as a whole, 
                        we have decided to utilise the old school method of the pie chart to better help readers understand the information better. 
                        Especially when it comes to the comparison of monies, a pie chart could prove to provide better visualisation. 
                        Since there is so much more information to visualise, 
                        our team has decided to make an explosive pie chart with user interactive ability to filter with the different sectors they are interested in and their data representation. 
                        The general overview alone could help provide a comparison of incomes and expenditures as a whole and could easily determine any deficits if any.
                    </p>

                    <a href="img/v2_prototype2.png" target="_blank">
                        <v-img max-width="1024" src="img/v2_prototype1.png" alt="v2_prototype1.png"></v-img>
                    </a>

                    <a href="img/v2_prototype2.png" target="_blank">
                        <v-img max-width="1024" src="img/v2_prototype2.png" alt="v2_prototype2.png"></v-img>
                    </a>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { sleepAsync } from '@/utils/common'

@Component({
    components: {

    },
})
export default class Milestone1 extends Vue
{
    async mounted()
    {
        console.log(`mounted ${this.constructor.name}`)
        await sleepAsync(1000)
        console.log(`async slept in ${this.constructor.name}`)
    }

    unmounted()
    {
        console.log(`unmounted ${this.constructor.name}`)
    }
}
</script>
