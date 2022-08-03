<template>
        <h1>{{ msg }}</h1>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class MainBody extends Vue
    {
        @Prop()
        public msg!: string;
    }
</script>
