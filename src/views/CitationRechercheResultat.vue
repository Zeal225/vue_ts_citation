<template>
    <div>
        <Header v-slot:header-content>
        </Header>

      <div class="row paddin-lr x-row">
        <div class="theme-jour-content margin-1 container">
          <div class="section-title">
            <GeneralSectionTitle :text="title +''+themeName" css="text-color indent entete"></GeneralSectionTitle>
            <span class="recent"><a href="#" class="text-color">les plus recents</a></span>
          </div>
        </div>
        <BlocCitationTypeMyCitation :citations="citations"></BlocCitationTypeMyCitation>
      </div>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue";
    import GeneralSectionTitle from "@/components/GeneralSectionTitle.vue";
    import BlocCitationTypeMyCitation from "@/components/BlocCitationTypeMyCitation.vue";
    import citationsDataService from "@/citationsDataService";
    export default {
        components: {
          Header,
          GeneralSectionTitle,
          BlocCitationTypeMyCitation
        },
      data(){
        return{
          citations: {},
          title: 'Citations correspondant à: ',
          themeName: '',
        }
      },
      methods: {
        async getThemeCitation(){
          const search = decodeURI(this.$route.params.text);
          const response = await citationsDataService.searchCitations(search);
          this.citations = response.data['hydra:member'];
          this.themeName = search
        }
      },
      created() {
        this.getThemeCitation()
      },
      beforeRouteUpdate (to, from, next) {
        //this.name = to.params.name

        //relance la recherche après changement de route:
        citationsDataService.searchCitations(encodeURI(to.params.text)).then( (response)=>{
          this.citations = response.data['hydra:member'];
          this.themeName = to.params.text
          next()
        });
      }
    }
</script>
