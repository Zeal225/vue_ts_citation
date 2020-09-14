<template>
<div>
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
            <a href="">{{ theme.name }}</a>
            <span class="close">&times;</span>
          </span>
        </div>
        <!-- -->
    </div>
</div>
</template>
<script>
    import themeDataService from "@/themeDataService";

    export default {
      data(){
        return{
          themes: {}
        }
      },
      methods:{
        //all themes
        retrieveThemes(){
          themeDataService.getAll().then((response) => {
            const data = response.data['hydra:member'];
            this.themes = data;
          }).catch( (error)=>{
          });
        },
      },
      created() {
        this.retrieveThemes()
      }
    }
</script>
