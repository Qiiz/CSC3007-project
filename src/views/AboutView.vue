<template>
    <div class="about">
        <v-container style="max-width: 1280px">
            <MainBody msg="CSC3007 Project Repository" />
            <h2>Source Working in Progress Document</h2>
            <a href="https://docs.google.com/document/d/1A0PJkCaWCEPrLr09tMKNEzVuimND8e4cDRdmY8suibs/" target="_blank">
                https://docs.google.com/document/d/1A0PJkCaWCEPrLr09tMKNEzVuimND8e4cDRdmY8suibs/
            </a>

            <iframe width="100%" src="https://docs.google.com/document/d/e/2PACX-1vTcgUsz3thLMaD6UI9_w3rjACtKHN2u8CjrHxN--DCCCMs9JSRUnpC1DnlXUqijLhfOoE0nzxkTHmFJ/pub?embedded=true" @load="resizeIframe"></iframe>
        </v-container>
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
export default class AboutView extends Vue
{

    resizeIframe(e: { target: HTMLIFrameElement })
    {
        const obj = e.target
        obj.style.height = window.document.documentElement.scrollHeight - 300 + 'px';
    }
}
</script>