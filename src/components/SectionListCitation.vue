<template>
    <div class="row paddin-lr x-row">
        <div class="theme-jour-content margin-1 container">
            <div class="section-title">
                <GeneralSectionTitle :text="title +''+themeName" css="text-color indent entete"></GeneralSectionTitle>
                <span class="recent"><a href="#" class="text-color">les plus recents</a></span>
            </div>
        </div>
        <BlocCitationTypeMyCitation :citations="citations"></BlocCitationTypeMyCitation>
    </div>
</template>

<script>
    import GeneralSectionTitle from "@/components/GeneralSectionTitle.vue";
    import BlocCitationTypeMyCitation from "@/components/BlocCitationTypeMyCitation.vue";
    import themeDataService from "@/themeDataService.ts";
    export default {
      data(){
        return{
          citations: {},
          title: 'Citations correspondant à: ',
          themeName: '',
        }
      },
        components: {
            BlocCitationTypeMyCitation,
            GeneralSectionTitle
        },
      methods: {
          async getThemeCitation(){
            const themeId = parseInt(this.$route.params.theme);
            const  response = await themeDataService.getThemeCitation(themeId);
            this.citations = response.data.citations;
            this.themeName = response.data.name
          }
      },
      created() {
          this.getThemeCitation()
      }
    }
</script>