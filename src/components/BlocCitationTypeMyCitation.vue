<template>
    <div class="container">
        <div v-for="citation in citations" :key="citation.id" class="x-bloccitations pad-bloc-mescitations accor-marge">
            <div class="bloc-citation btn-group-parent">
                <h2 class="citation text-color">
                    {{ citation.content }}
                </h2>
                <h3 class="auteur-citation text-color x-pad-mescitations">
                    <a href="#">{{ citation.author }}</a>
                </h3>
                <h4 class="sign-citation">
                    lettre de 1648 e son fils. Parfois attribue aussi au
                    <span class="x-n">Cardinal de Richelieu</span>
                </h4>
                <div class="btn-group-parent">
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
        </div>
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
    export default {
      props:{
        citations: Array
      }
    }
</script>
