<template>
    <div class="row paddin-lr pos">
        <div class="container">
            <div class="row" id="inline-search-block">
                <form id="inline-search">
                    <div class="" id="embed-search">
                        <input v-model="searchText" type="search" placeholder="taper un mot clé" class="input-s js-taille js-btn-serach">
                        <span class="btn-mobile mobile-left"></span>
                        <button @click.prevent="validSearch" class="btn-input-s js-btn-none">rechercher</button>
                    </div>
                    <div @click.prevent="showAlphabetLetter" id="lettre" class="js js-hide" data="alpabet">
                        <a href="">a > z</a>
                    </div>
                    <div @click.prevent="showThemeLetter" id="tag-search" class="js js-hide" data="words">
                    </div>
                </form>
                <div class="pannel">
                    <div class="row collaspe">
                        <div v-if="this.$store.getters.showAlphabetLetter" class="row alpabet" id="alpabet">
                            <div class="flex">
                                <a href="" class="first-letter">a</a>
                                <a href="">b</a>
                                <a href="">c</a>
                                <a href="">d</a>
                                <a href="">e</a>
                                <a href="">f</a>
                                <a href="">g</a>
                                <a href="">h</a>
                                <a href="">i</a>
                                <a href="">j</a>
                                <a href="">k</a>
                                <a href="">l</a>
                                <a href="">m</a>
                                <a href="">n</a>
                                <a href="">o</a>
                                <a href="">p</a>
                                <a href="">q</a>
                                <a href="">r</a>
                                <a href="">s</a>
                                <a href="">t</a>
                                <a href="">u</a>
                                <a href="">v</a>
                                <a href="">w</a>
                                <a href="">x</a>
                                <a href="">y</a>
                                <a href="">z</a>
                            </div>
                        </div>
                        <div v-if="this.$store.getters.showThemeWord" class="words" id="words">
                            <div class="flex-lettre">
                                <div v-for="theme in themes" :key="theme.id">
                                  <router-link tag="a" :to="{ name: 'theme-citations', params: { theme: theme.id }}">{{ theme.name }}</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import themeDataService from "@/themeDataService";
    import router from "@/router";

    export default {
      data(){
        return{
          themes: {},
          searchText: ''
        }
      },
      methods:{
        showAlphabetLetter(){
          this.$store.dispatch("showAlphabetLetter");
        },
        showThemeLetter(){
          this.$store.dispatch("showThemeWord");
        },

        validSearch(){
          const search = encodeURI(this.searchText);
          if (search.trim().length > 0) {
            const path = `/citations/results/${search}`
            if (this.$route.path !== path) this.$router.push(path)
          }
          //router.push({path: "citations/results/"+search, params:{text: search}})
        },

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
