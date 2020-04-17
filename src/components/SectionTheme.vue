<template>
    <div class="row paddin-lr x-row">
        <div class="theme-jour-content margin-1 container">
            <div class="section-title">
                <GeneralSectionTitle text="Tous les themes" css="text-color tag-title entete"></GeneralSectionTitle>
                <span class="recent"><a href="#" class="text-color">les plus recents</a></span>
            </div>
        </div>
        <div class="container white box margin-bottom-1">
            <BlocThemeFilterWithSearch></BlocThemeFilterWithSearch>
        </div>
    </div>
</template>

<script lang="ts">
    import BlocThemeFilterWithSearch from "@/components/BlocThemeFilterWithSearch.vue";
    import GeneralSectionTitle from "@/components/GeneralSectionTitle.vue";
    export default {
        components: {
            BlocThemeFilterWithSearch,
            GeneralSectionTitle
        }
    }
</script>
