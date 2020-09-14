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
    import themeDataService from "@/themeDataService";
    import authorsDataService from "@/authorsDataService";
    export default {
        components: {
          Header,
          GeneralSectionTitle,
          BlocCitationTypeMyCitation
        },
      data(){
        return{
          citations: {},
          title: 'Citations de: ',
          themeName: '',
        }
      },
      methods: {
        async getThemeCitation(){
          const authorId = parseInt(this.$route.params.id);
          const  response = await authorsDataService.getAuthorCitation(authorId);
          this.citations = response.data.citations;
          this.themeName = response.data.firstName +' '+response.data.lastName
        }
      },
      created() {
        this.getThemeCitation()
      },
    }
</script>
