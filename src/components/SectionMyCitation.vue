<template>
    <div class="row paddin-lr x-row">
        <div class="theme-jour-content margin-1 container">
            <div class="section-title">
                <GeneralSectionTitle text="mes citations" css="text-color indent entete"></GeneralSectionTitle>
                <span class="recent"><a href="#" class="text-color">les plus recents</a></span>
            </div>
        </div>
        <BlocCitationTypeMyCitation></BlocCitationTypeMyCitation>
    </div>
</template>

<script lang="ts">
    import GeneralSectionTitle from "@/components/GeneralSectionTitle.vue";
    import BlocCitationTypeMyCitation from "@/components/BlocCitationTypeMyCitation.vue";
    export default {
        components: {
            BlocCitationTypeMyCitation,
            GeneralSectionTitle
        }
    }
</script>