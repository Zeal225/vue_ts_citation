<template>
<div>
  <div class="vld-parent">
    <LoadingPlugin :active.sync="isLoading"
                   :can-cancel="true"
                   :is-full-page="fullPage">
    </LoadingPlugin>
  </div>
    <!-- debut -->
    <div v-for="author in authors" :key="author.id" class="">
        <div class="x-bloccitations accor-marge">
            <div @click="toggleAccordion(author.id)" class="accord bloc-citation relative padding-1" :data-elm="'target-'+author.id">
                <h2 class="text-color entete nom-auteur orange">{{ author.firstName }} {{ author.lastName }}</h2>
                <span class="text-color voir-plus voir">voir les citations de
                  <span class="orange">{{ author.firstName }} {{ author.lastName }}</span>
                </span>
                <span class="down" href="">
                  <img :src="'/images/fleright.svg'">
                </span>
            </div>
            <div :id="'target-'+author.id" class="accordion dis-n">
                <div v-for="citation in author.citations" :key="citation.id" class="bloc-citation brbottom pad-bloc align-center">
                    <h2 class="citation text-color">
                        {{ citation.content }}
                      <a href="#" class="icon coeur coeur-m"></a>
                    </h2>
                    <h3 class="sign-citation">
                        lettre de 1648 e son fils. Parfois attribue aussi au
                        <span class="x-n">Cardinal de Richelieu</span>
                    </h3>
                    <div class="bloc-icon">
                        <div class="tag-text">
<!--                            <a v-for="theme in citation.themes" :key="theme.id" href="#">{{ theme.name }}, </a>-->
                        </div>
                        <div class="tag-icon border-style">
                            <a href="#" class="icon star"></a>
                            <a href="#" class="icon star"></a>
                            <a href="#" class="icon star"></a>
                            <a href="#" class="icon star"></a>
                            <a href="#" class="icon star"></a>
                        </div>
                        <div class="tag-icon border-style">
                            <a href="" class="icon fb"></a>
                            <a href="" class="icon tw"></a>
                            <a href="" class="icon gp"></a>
                            <a href="" class="icon ml"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- fin -->
    <div class="container center margin-2-auto">
        <div class="fle-che">
            <a class="round-number direction fl-left arrow-left-end-blue" href=""></a>
            <a class="round-number direction fl-left arrow-left-blue" href=""></a>
        </div>
        <div class="nom-bre">
            <a class="round-number round-number-active" href="">1</a>
            <a class="round-number" href="">2</a>
            <a class="round-number" href="">3</a>
            <a class="round-number" href="">4</a>
        </div>
        <div class="fle-che">
            <a class="round-number direction fl-rig arrow-right-blue" href=""></a>
            <a class="round-number direction fl-rig arrow-right-end-blue" href=""></a>
        </div>
    </div>
</div>
</template>
<script>
    import authorsDataService from "@/authorsDataService";
    import citationsDataService from "@/citationsDataService";

    import LoadingPlugin from 'vue-loading-overlay'
    import 'vue-loading-overlay/dist/vue-loading.css'

    export default {
      components:{
        LoadingPlugin
      },
      data(){
        return{
          authors: {},
          isLoading: false,
          fullPage: true
        }
      },
      methods: {
        async getAphabetCitation(){
          //const letter = 'A';
          const letter = this.$route.params.letter;
          this.isLoading = true;
          const  response = await citationsDataService.findCitationsByAuthorsFirstLetterOfName(letter.toLocaleUpperCase());
          const data = response.data["hydra:member"];
          this.isLoading = false;
          this.authors = data;
        },
        toggleAccordion(id){
           this.authors.map((author, index) => {
            if (parseInt(author.id) === id){
              const elm = document.getElementById("target-"+parseInt(author.id))
              elm.classList.toggle('dis-n')
            }else {
              const elm = document.getElementById("target-"+parseInt(author.id))
              elm.classList.add('dis-n')
            }
          })
        }
      },
      created() {
        this.getAphabetCitation()
      },
      watch: {
        '$route': 'getAphabetCitation'
      }
    }
</script>
