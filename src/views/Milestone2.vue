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
        <BeveragePlot
            :targetGoal="targetGoal"
            :trackingMode="trackingMode"
            :beverageInMind="beverageInMind"
            :exerciseData="exerciseData"
            :beverageData="beverageData">
        </BeveragePlot>
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
                    deletable-chips
                    solo
                    :menu-props="{ closeOnContentClick: true }"
                    :items="beverageData.map(x => x.name).sort()"
                    label="Have a beverage in mind?">
                </v-autocomplete>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Beverages } from '../data/Beverages'
import { Exercises } from '../data/Exercises'

import BeveragePlot from '@/components/BeveragePlot.vue';

@Component({
    components: {
        BeveragePlot
    },
})
export default class Milestone2 extends Vue
{
    public trackingMode = false
    public targetGoal = 100
    public beverageInMind = [] as string[]
    public beverageData = Beverages
    public exerciseData = Exercises

    created()
    {
        console.log("created Milestone2 view")
    }

    mounted()
    {
        console.log("mounted Milestone2 view")
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