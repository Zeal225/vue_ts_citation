<template>
<div>
    <!-- debut -->
    <div v-for="author in authors" :key="author.id" class="">
        <div class="x-bloccitations accor-marge">
            <div class="accord bloc-citation relative padding-1" href="un">
                <h2 class="text-color entete nom-auteur orange">{{ author.firstName }} {{ author.lastName }}</h2>
                <span class="text-color voir-plus voir">voir les citations de
                  <span class="orange">{{ author.firstName }} {{ author.lastName }}</span>
                </span>
                <span class="down" href=""><img src="images/fleright.svg"></span>
            </div>
            <div class="accordion" id="un">
                <div class="bloc-citation pad-bloc align-center">
                    <h2 class="citation text-color">
                        Tu ne sais pas mon fils, avec combien peu de sagesse le monde est gouverne
                    </h2>
                    <h3 class="sign-citation">
                        lettre de 1648 e son fils. Parfois attribue aussi au
                        <span class="x-n">Cardinal de Richelieu</span>
                    </h3>
                    <div class="bloc-icon">
                        <div class="tag-text">
                            <a class="orange" href="#">gouvernement, </a>
                            <a href="#">sagesse, </a>
                            <a href="#">monde</a>
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
                <div class="bloc-citation brbottom pad-bloc align-center">
                    <h2 class="citation text-color">
                        Tu ne sais pas mon fils, avec combien peu de sagesse le monde est gouverne<a href="#" class="icon coeur coeur-m"></a>
                    </h2>
                    <h3 class="sign-citation">
                        lettre de 1648 e son fils. Parfois attribue aussi au
                        <span class="x-n">Cardinal de Richelieu</span>
                    </h3>
                    <div class="bloc-icon">
                        <div class="tag-text">
                            <a href="#">gouvernement, </a>
                            <a href="#">sagesse, </a>
                            <a href="#">monde</a>
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
                <div class="bloc-citation brbottom pad-bloc align-center">
                    <h2 class="citation text-color">
                        Tu ne sais pas mon fils, avec combien peu de sagesse le monde est gouverne
                    </h2>
                    <h3 class="sign-citation">
                        lettre de 1648 e son fils. Parfois attribue aussi au
                        <span class="x-n">Cardinal de Richelieu</span>
                    </h3>
                    <div class="bloc-icon">
                        <div class="tag-text">
                            <a href="#">gouvernement, </a>
                            <a href="#">sagesse, </a>
                            <a href="#">monde</a>
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
                <div class="bloc-citation brbottom pad-bloc align-center">
                    <h2 class="citation text-color">
                        Tu ne sais pas mon fils, avec combien peu de sagesse le monde est gouverne
                    </h2>
                    <h3 class="sign-citation">
                        lettre de 1648 e son fils. Parfois attribue aussi au
                        <span class="x-n">Cardinal de Richelieu</span>
                    </h3>
                    <div class="bloc-icon">
                        <div class="tag-text">
                            <a href="#">gouvernement, </a>
                            <a href="#">sagesse, </a>
                            <a href="#">monde</a>
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
                <div class="bloc-citation brbottom pad-bloc align-center">
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

    export default {
      data(){
        return{
          authors: {}
        }
      },
      methods: {
        retrieveAuthor(){
          authorsDataService.getAll().then((response)=>{
            const data = response.data['hydra:member'];
            this.authors = data;
            console.log(this.authors)
          })
        }
      },
      created() {
        this.retrieveAuthor();
      }
    }
</script>
