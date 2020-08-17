<template>
  <div class="home">
    <Header v-slot:header-content>
      <Slider :random-citation="citationsSlide"></Slider>
    </Header>
    <SectionThemeCitationJour></SectionThemeCitationJour>
    <div class="row color-pub style-pub">
      <div class="bandeau"></div>
    </div>
    <SectionHomeGenerale></SectionHomeGenerale>
    <div class="row color-pub style-pub bottom">
      <div class="bandeau"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import SectionThemeCitationJour from '@/components/SectionThemeCitationJour'
import SectionHomeGenerale from '@/components/SectionHomeGenerale'
import Slider from "@/components/Slider";
import citationsDataService from "@/citationsDataService";


export default {
  name: 'home',
  data(){
    return{
      citationsSlide: []
    }
  },
  components: {
    Header,
    SectionThemeCitationJour,
    SectionHomeGenerale,
    Slider
  },
  methods: {
    retrieveHomeSliderCitations(){
      citationsDataService.getAll().then((response=>{
        const data = response.data['hydra:member'];
        for (let i=0; i< 3; i++){
          this.citationsSlide.push(data[i])
        }
      })).catch((error=>{
        console.log(error)
      }))
    }
  },

  created() {
    this.retrieveHomeSliderCitations()
  }

}
</script>
