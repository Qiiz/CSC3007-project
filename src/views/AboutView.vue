<template>
    <div class="about">
        <MainBody msg="CSC3007 Project Repository" />
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