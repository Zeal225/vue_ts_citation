<template>
<div>
  <div class="vld-parent">
    <LoadingPlugin :active.sync="isLoading"
                   :can-cancel="true"
                   :is-full-page="fullPage">
    </LoadingPlugin>
  </div>
    <div class="myform">
        <form id="inline-search">
            <div class="bor-none" id="embed-search">
                <input type="search" placeholder="taper un ou pulisieurs mots cles" class="input-s">
                <span class="btn-mobile bloc-lettre-input"></span>
                <button class="btn-input-s mar-lettre tablette-btn">rechercher</button>
            </div>
        </form>
    </div>
    <div class="words-membre class" id="" style="display: block;">
        <div v-for="theme in themes" :key="theme.id" class="words-content" >
          <span class="words-mytheme">
            <router-link tag="a" :to="{ name: 'theme-citations', params: { theme: theme.id }}">{{ theme.name }}</router-link>
            <span class="close">&times;</span>
          </span>
        </div>
        <!-- -->
    </div>
</div>
</template>
<script>
    import themeDataService from "@/themeDataService";

    import LoadingPlugin from 'vue-loading-overlay'
    import 'vue-loading-overlay/dist/vue-loading.css'

    export default {
      components:{
        LoadingPlugin
      },
      data(){
        return{
          themes: {},
          isLoading: false,
          fullPage: true
        }
      },
      methods:{
        //all themes
        retrieveThemes(){
          this.isLoading = true;
          themeDataService.getAll().then((response) => {
            const data = response.data['hydra:member'];
            this.themes = data;
            this.isLoading = false
          }).catch( (error)=>{
            this.isLoading = false;
          });
        },
      },
      created() {
        this.retrieveThemes()
      }
    }
</script>
