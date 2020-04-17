<template>
    <div class="mobile row paddin-lr x-row">
        <div class="global-content container">
            <GeneralSectionTitle text="CITATIONS DU JOUR" css="x-titre text-color"></GeneralSectionTitle>
            <DayCitationBloc></DayCitationBloc>
        </div>
        <div class="theme-jour-content container">
            <GeneralSectionTitle text="les themes du jour" css="x-titre text-color"></GeneralSectionTitle>
            <DayThemeBloc></DayThemeBloc>
        </div>
        <div class="btn-group-parent ma-btn">
            <a href="" class="btn-style">Tous les themes</a>
        </div>
    </div>
</template>

<script lang="ts">
    import GeneralSectionTitle from "@/components/GeneralSectionTitle.vue";
    import DayCitationBloc from "@/components/DayCitationBloc.vue";
    import DayThemeBloc from "@/components/DayThemeBloc.vue";

    export default {
        components: {
            DayCitationBloc,
            DayThemeBloc,
            GeneralSectionTitle
        }
    }
</script>
