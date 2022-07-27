<template>
    <v-container>
        <v-row>
            <v-col>
                doc
            </v-col>
        </v-row>
    </v-container>
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