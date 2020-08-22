<template>
    <div class="mobile row paddin-lr x-row">
        <div class="global-content container">
            <GeneralSectionTitle text="CITATIONS DU JOUR" css="x-titre text-color"></GeneralSectionTitle>
            <DayCitationBloc :citation="citation"></DayCitationBloc>
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

<script>
    import GeneralSectionTitle from "@/components/GeneralSectionTitle.vue";
    import DayCitationBloc from "@/components/DayCitationBloc.vue";
    import DayThemeBloc from "@/components/DayThemeBloc.vue";
    import citationsDataService from "@/citationsDataService";

    export default {
        components: {
            DayCitationBloc,
            DayThemeBloc,
            GeneralSectionTitle
        },
        data(){
            return{
                citation: Object
            }
        },
        methods:{
            retrieveDayCitation(){
                citationsDataService.getDayCitation().then( (response=>{
                    this.citation = response.data;
                }))
            }
        },
        created() {
            this.retrieveDayCitation()
        }
    }
</script>