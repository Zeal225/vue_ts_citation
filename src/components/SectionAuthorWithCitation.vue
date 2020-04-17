<template>
    <div class="row paddin-lr x-row">
        <div class="theme-jour-content margin-1 container">
            <div class="section-title">
                <GeneralSectionTitle text="Tous les auteurs" css="text-color indent entete"></GeneralSectionTitle>
                <span class="recent"><a href="#" class="text-color">les plus recents</a></span>
            </div>
        </div>
        <div class="container mesauteurs">
            <BlocAuthorWithCitation></BlocAuthorWithCitation>
        </div>
    </div>
</template>

<script lang="ts">
    import BlocAuthorWithCitation from "@/components/BlocAuthorWithCitation.vue";
    import GeneralSectionTitle from "@/components/GeneralSectionTitle.vue";
    export default {
        components: {
            BlocAuthorWithCitation,
            GeneralSectionTitle
        }
    }
</script>
