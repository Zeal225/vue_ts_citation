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
                              <span  v-for="letter in letters" :key="letter">
                                <router-link tag="a" :to="{ name: 'authors-letter-citations', params: { letter: letter }}">{{ letter }}</router-link>
                              </span>
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
          searchText: '',
          letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z']
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
        this.retrieveThemes();
      }
    }
</script>
