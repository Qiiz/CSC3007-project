<template>
    <div class="about">
        <MainBody msg="Data Source: " />
        <a target="_blank" href="https://data.gov.sg/dataset/cases-recorded-for-selected-major-offences">https://data.gov.sg/dataset/cases-recorded-for-selected-major-offences</a>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import MainBody from '@/components/MainBody.vue'; // @ is an alias to /src

    @Component({
        components: {
            MainBody,
        },
    })
    export default class HomeView extends Vue { }
</script>