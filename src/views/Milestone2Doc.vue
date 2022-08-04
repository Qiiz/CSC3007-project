<template>
    <div class="text-justify">
        <v-container style="max-width: 1280px">
            <v-row>
                <v-col cols="12">
                    <h1>Milestone 2</h1>

                    <p>Implementation at <a href="./#/milestone2">Milestone 2 Dashboard</a>.</p>

                    <h2>Milestone 2 Slides</h2>

                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQbCrPwg2uxM5sTKtD6Ip-WLOh6IiDZpR5F2GHyDCnCjwmr4bgtx53yDmWXIX6Tmw/embed?start=true&loop=false&delayms=1800000" frameborder="0" width="1024" height="640" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>


                    <p>
                        Out of the two visualisations in Milestone 1,
                        our team has selected <b>Visualisation Approach 1</b> as part of our collaborative effort to improve the current visualisation.
                        Through the discussion of the flawed design used by the artist in Milestone 1,
                        our team hopes to refine the overall design to a better one. Below is the discussion made to justify the approach implemented.
                    </p>

                    <h2>Prototype Justification- Overview View / In-depth View</h2>

                    <p>
                        Before moving to the actual application of our project, we will discuss the critiques and justification of the design and approach used.
                    </p>
                    <p>
                        As per the prototype shown in the diagram below,
                        the ultimate goal for this visualisation (Figure 1) is to provide a high-level analytical view of all the “drinks”
                        and the equivalent exercises required to reduce the total calorie intake for each beverage.
                        By incorporating the search bar for this implementation,
                        it helps to filter out the user preferred beverage and its corresponding information.
                        Regarding this visualisation (Figure 2),
                        our team included calorie filtering to maintain the artist's original intention of viewing information based on calorie intake.
                        However, we modified it to a better approach for visualising the data.
                    </p>

                    <p>
                        One of the significant flaws in the previous design is the lack of interaction with other audiences' specifications.
                        Rather than forcing the audience to be able to track the drink based on calorie intake,
                        we offered an alternative to reach out to a larger audience pool through user interaction.
                    </p>

                    <a href="img/v1_prototype1.png" target="_blank">
                        <v-img eager max-width="1024" src="img/v1_prototype1.png" alt="v1_prototype1.png"></v-img>
                    </a>
                    <p class="text-center">
                        Diagram 1: Prototype visualisation on overview view
                    </p>

                    <a href="img/v1_prototype2.png" target="_blank">
                        <v-img eager max-width="1024" src="img/v1_prototype2.png" alt="v1_prototype2.png"></v-img>
                    </a>
                    <p class="text-center">
                        Diagram 2: Prototype visualisation on in-depth view
                    </p>

                    <h2>
                        What? (Data)
                    </h2>

                    <p>
                        The original visualisation provided a static dataset which he had explored the features to consider on his infographic.
                        For our project, we will be using the similar dataset which he has shared and leverage on both ordinal and ratio data of the beverages
                        and exercises the original owner has kindly provided.
                    </p>

                    <p>
                        The following is the breakdown of the data as provided in table for the milestone 2 project
                    </p>

                    <ul>
                        <li>
                            Ordinal Data
                            <ul>
                                <li>Beverage Name</li>
                                <li>Beverage Category (i.e. Soft Drink, Tea, Coffee)</li>
                                <li>Exercise Name
                                </li>
                            </ul>
                        </li>

                        <li>
                            Ratio Data
                            <ul>
                                <li>Caffeine</li>
                                <li>Calories</li>
                                <li>Calories burnt in 30 minutes for exercises</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>Preparation</h3>

                    <p>
                        The data provided to us is in a CSV file format where the data are categorised properly based on their purpose of representation.
                        For instance, IIB Coffee tab shows the entirety of beverages to be used, IIB equivalent tab shows the different exercises data.
                        There are also other unused data not visualised, which we hoped to cover eventually.
                        As per our implementation, our team has decided to utilise the same set of data but undergo some data preparation to suit our design needs.
                    </p>

                    <h4>Data Relatability</h4>
                    <p>
                        Through understanding the representation from the previous artist,
                        we realised that the data he/she used to visualise exercise equivalence are not common and relatable.
                        With that, part of the change would be to include some common exercise with equivalent calorie reduction like waling,
                        skipping or swimming rather exotic exercises like cross country skiing or bowling.
                    </p>

                    <h4>Standardisation</h4>
                    <p>
                        As mentioned in Milestone 1,
                        in order to maintain standardisation throughout the entire visualisation,
                        we also have to set a default serving per beverage.
                        Not only that, since the targeted representation is towards caffeinated beverages, we also have to remove non-caffeinated drinks.
                    </p>

                    <h2>
                        Why? (Task)
                    </h2>

                    <p>
                        By stepping into the shoes of what users want from comparing calories and caffeine,
                        we understood that users primarily do so to manage their everyday calorie intake from caffeine beverage consumption.
                        Our project is to focus on suggesting the beverage that meets the user's needs and supplementary information that could better help them in their calorie management.
                        In cooperation with functionalities like toggling between “tracking ON” or “tracking OFF”,
                        users have more options to visualise the data based on their needs.
                    </p>

                    <p>
                        What that in mind, the task abstraction is further broken into the following individual components
                    </p>

                    <ul>
                        <li>
                            Analyse: <b>Consume</b> and <b>present</b> to influence the user's decision making
                        </li>
                        <li>
                            Search: <b>Locate</b> the beverage suitable for the user, <b>browse</b> beverages given user requirements.
                        </li>
                        <li>
                            Query: <b>Identify</b> the caffeine beverages best suitable for the user
                        </li>
                        <li>
                            Target: <b>Many;</b> the users requirements of calories and caffeine or the exercise they can afford to perform for the beverage.
                        </li>
                    </ul>

                    <h2>
                        How? (Idiom)
                    </h2>

                    <p>
                        Poor Idioms brought up from Milestone 1 have been re-evaluated by our team with a newer design to counteract the previous visualisation.
                        Below shows the changes made as compared to the original design.
                    </p>

                    <ol>
                        <li>
                            <u>Encode</u> - We primarily focus on 2 quantitative data which is the calories and the caffeine from the tabular data provided.
                            Therefore, using a scatter plot with rectilinear axis orientation would be most appropriate.
                            However, the point origin of the axis will be from (0,0) instead of some random values as seen in initial visualisation from milestone 1.
                        </li>

                        <li>
                            <u>Colours and Channels</u> - <b>Icons</b> in a <b>circle marker</b> will be expressed as a <b>point</b> on the graph to
                            identify the <b>category type of the beverage</b>, i.e. Soft Drink, Coffee or Tea. As a form of <b>salience</b>,
                            when users enter the beverages of interest in the search bar, the visualisation will <b>decrease the opacity of the beverages</b>
                            which are not in the search bar by <b>“popping” out</b> the interested selection(s).
                        </li>

                        <li>
                            <u>Manipulate</u> - To assist in the user to quickly identify the calories and caffeine level of the caffeine beverage they have in mind,
                            we introduce a search bar where the user can <b>select</b> any caffeine beverage they are interested in.
                            The visualisation will <b>“brush” the selection in the graph</b> by reducing the opacity of all other points for ease of identification.
                        </li>

                        <li>
                            <u>Reduce</u> - As another feature to satisfy the user needs,
                            we <b>filter and item reduce</b> the beverage on the graph based on the exercise that the user can afford to do and
                            they could narrow down to the selections available for them to focus on.
                        </li>
                    </ol>

                    <h3>
                        Design Principles
                    </h3>

                    <p>
                        The team adopts closely to the 3 rules of interactive data visualisation from Vlad Kozhevnikov.
                    </p>

                    <h4>
                        Overview first
                    </h4>
                    <p>
                        The visualisation will show all the data points on the scatterplot as an overview of the distribution of beverage data they could explore.
                        No labels, or any additional data will be shown other than the icons in the circle markers itself.
                    </p>

                    <h4>
                        Zoom & Filter
                    </h4>

                    <p>
                        The visualisation expects the user to interact with the UI elements provided such as the calories slider,
                        tracking mode toggles and the search bar.
                        Using these UI elements, it will only focus on the data points which best interest the user by making irrelevant data points less visible by reducing the opacity or just hiding them.
                    </p>

                    <h4>Details on Demand</h4>

                    <p>
                        More details (i.e. calories/caffeine exact levels or name) of the data points of interest will be shown only when the user mouse hovers over the point.
                    </p>

                    <h3>
                        Technologies Used
                    </h3>

                    <p>
                        The primary framework used is Vue 2 for its reactivity framework,
                        project generation and build system with the Vue CLI tool.
                        TypeScript is chosen as the component scripting language for its type safety and code completion features,
                        which ease the development experience.
                        Vuetify is selected for the user interface components, material design theming and its extensive documentation,
                        and finally along with the Data Driven Document (D3) for its capability to provide manipulation computations to visualisations such as on the Scalable Vector Graphics (SVG).
                    </p>

                    <p>
                        Vue also used to assist to manipulate the SVG components with the Vue directives such as <code>v-if</code> and <code>v-for</code> to reactively generate them as well as the setting of attributes values,
                        all seamlessly integrated well with Vue's reactivity.
                    </p>

                    <h4>
                        Pitfalls
                    </h4>

                    <p>
                        Vue 3 should be used instead for its latest version and design improvements of Vue,
                        however, the support of Vue 3 for the Vuetify library is still in testing,
                        therefore we still stick with Vue 2 since it's still very powerful to our needs and not all deprecated yet.
                        Scaffolding of the Vue's project structure and the reactivity approach introduces extra complexity to the project development
                        as well as having a steep learning curve for those who are not familiar with.
                    </p>

                    <p>
                        During the initial integration with all data,
                        we can see it's not straightforward to represent all the data to the viewport as many of them are cluttered,
                        overlapping each other. We have to extensively fine tune the various sizing and adjustment in order to fit all the data we have nicely.
                    </p>

                    <h3>
                        Work Contribution
                    </h3>

                    <p>
                        The entire project is a collective effort done by every member of the team.
                    </p>

                    <h3>
                        Future Work
                    </h3>

                    <p>
                        In addition to what was completed, our team can foresee adding these features to improve the final application further.
                    </p>

                    <h4>
                        Custom user beverage
                    </h4>

                    <p>
                        To allow users to indicate their daily calorie intake to make the experience more accustomed for the user and suggest recommended beverages based on their daily calorie intake.
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {

    },
})
export default class Milestone2Doc extends Vue
{
    async mounted()
    {
        return
    }

    unmounted()
    {
        console.log(`unmounted ${this.constructor.name}`)
    }
}
</script>