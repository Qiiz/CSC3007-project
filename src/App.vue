<template>
    <v-app>
        <v-card :class="radius">
            <v-toolbar color="dark" dark flat>
                <v-toolbar-title>Singapore Crime Rate</v-toolbar-title>

                <v-spacer></v-spacer>

                <template v-slot:extension>
                    <v-tabs v-model="tab" align-with-title>
                        <v-tabs-slider color="white"></v-tabs-slider>

                        <v-tab to="/">Home</v-tab>
                        <v-tab to="/about">About</v-tab>
                    </v-tabs>
                </template>
            </v-toolbar>
        </v-card>
        <router-view />
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
    #app {
        font-family: Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
