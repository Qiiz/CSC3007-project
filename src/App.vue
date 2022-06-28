<template>
    <v-app>
        <v-card :class="radius">
            <v-toolbar color="dark" dark flat>
                <v-toolbar-title>CSC3007 Project</v-toolbar-title>

                <v-spacer></v-spacer>

                <template v-slot:extension>
                    <v-tabs v-model="tab" align-with-title>
                        <v-tabs-slider color="white"></v-tabs-slider>

                        <v-tab to="/">Milestone 1</v-tab>
                        <v-tab to="/about">About</v-tab>
                    </v-tabs>
                </template>
            </v-toolbar>
        </v-card>
        <v-main>
            <router-view />
        </v-main>
        <v-footer> 2022 </v-footer>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                tab: null,
                items: ["Home", "About"],
                radius: "rounded-0",
            };
        },
    };
</script>

<style>
</style>
