<template>
    <div class="row pad-general x-row">
      <div class="vld-parent">
        <LoadingPlugin :active.sync="isLoading"
                       :can-cancel="true"
                       :is-full-page="fullPage">
        </LoadingPlugin>
      </div>
        <div class="container tes">
            <div>
                <GeneralSectionTitle  text="les plus recentes" css="x-titre text-color"></GeneralSectionTitle>
                <div class="no-padding gr-d-9 gr-tl-9 gr-t-12 gr-c-12">
                    <BlocCitationTypeMoreRecent :citations='allCitations'></BlocCitationTypeMoreRecent>
                </div>
                <div class="gr-d-3 gr-tl-3 gr-t-12 gr-c-12 gauche">
                    <div class="gr-12 center-tag paddin-gr">
                        <GeneralSectionTitle text="tous les themes" css="text-color tag-title entete"></GeneralSectionTitle>
                        <ListAllTheme :themes="quelquesThemes"></ListAllTheme>
                    </div>
                    <div class="btn-group-parent gr-12">
                        <a href="" class="btn-style">Tous les themes</a>
                    </div>
                    <div class="gr-12 paddin-gr x-pub1 tof">
                        <img src="images/pub1.png">
                    </div>
                    <div class="gr-12 center-tag paddin-gr">
                        <GeneralSectionTitle text="tous les auteurs" css="text-color tag-title entete"></GeneralSectionTitle>
                        <ListAllAuthor :authors="quelquesAuthors"></ListAllAuthor>
                    </div>
                    <div class="btn-group-parent gr-12">
                        <a href="" class="btn-style">Tous les auteurs</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import GeneralSectionTitle from "@/components/GeneralSectionTitle.vue";
    import BlocCitationTypeMoreRecent from "@/components/BlocCitationTypeMoreRecent.vue";
    import ListAllAuthor from "@/components/ListAllAuthor.vue";
    import ListAllTheme from "@/components/ListAllTheme.vue";
    import citationsDataService from "@/citationsDataService";
    import themeDataService from "@/themeDataService";
    import authorsDataService from "@/authorsDataService";
    import LoadingPlugin from 'vue-loading-overlay'
    import 'vue-loading-overlay/dist/vue-loading.css'
    export default {
        //props: ['citations'],
        data(){
            return {
                allCitations: null,
                quelquesThemes: [],
                quelquesAuthors: [],
              isLoading: false,
              fullPage: true
            }
        },
        components: {
            GeneralSectionTitle,
            BlocCitationTypeMoreRecent,
            ListAllAuthor,
            ListAllTheme,
          LoadingPlugin
        },

        methods:{
            retrieveCitations(){
                citationsDataService.getAll().then((response) => {
                    this.allCitations = response.data['hydra:member'];
                }).catch( (error)=>{

                })
            },
            retrieveThemes(){
              this.isLoading = true;
                themeDataService.getAll().then((response) => {
                    const data = response.data['hydra:member'];
                    for (let i=0; i< 20; i++){
                        this.quelquesThemes.push(data[i])
                    }
                  this.isLoading = false
                }).catch( (error)=>{
                  this.isLoading = false
                });
            },
            retrieveAuthor(){
              this.isLoading = true;
                authorsDataService.getAll().then((response)=>{
                    const data = response.data['hydra:member'];
                    for (let i=0; i< 20; i++){
                        this.quelquesAuthors.push(data[i])
                    }
                  this.isLoading = false
                })
            },
        },
        mounted() {
            this.retrieveCitations();
            this.retrieveThemes();
            this.retrieveAuthor()
        }
    }
</script>
