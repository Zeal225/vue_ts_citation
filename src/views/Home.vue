<template>
  <div class="home">
    <Header v-slot:header-content>
      <Slider></Slider>
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


export default {
  name: 'home',
  components: {
    Header,
    SectionThemeCitationJour,
    SectionHomeGenerale,
    Slider
  }
}
</script>
