<template>
    <div class="home">
        <CrimeChart :responseData="apiResponse"/>
        <p>
            <b>Response time: </b> 
            <span v-if="loaded">
                API {{ benchmark.api.toFixed(3) }} ms
            </span>
            <span v-else>
                Loading...
            </span>
        </p>
    </div>
</template>

<script lang="ts">
    import { CrimeData } from '@/model/CrimeData'
    import { Component, Vue } from 'vue-property-decorator';

    import CrimeChart from '@/components/CrimeChart.vue';

    async function sleepAsync(timeout: number)
    {
        return new Promise<void>((r) =>
        {
            setTimeout(() => r(), timeout)
        })
    }

    @Component({
        components: {
            CrimeChart
        },
    })
    export default class HomeView extends Vue
    {
        apiResponse = {} as CrimeData

        loaded = false

        benchmark = {
            api: 0
        }

        async mounted()
        {
            const startTime = performance.now()
            try
            {
                const response = await fetch("https://data.gov.sg/api/action/datastore_search?resource_id=83c21090-bd19-4b54-ab6b-d999c251edcf")

                if (!response.ok)
                {
                    throw "Not ok response"
                }

                // await sleepAsync(1000)
                
                this.apiResponse = JSON.parse(await response.text()) as CrimeData


                this.benchmark.api = performance.now() - startTime

                this.loaded = true
            } catch (e)
            {
                const error = e as Error
                console.error(error)
                alert("API Error: " + error.message)
            }
        }

        unmounted()
        {
            console.log("unmounted")
        }
    }
</script>
