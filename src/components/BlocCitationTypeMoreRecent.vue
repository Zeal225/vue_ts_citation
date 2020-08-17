<template>
    <div>
        <div v-for="citation in citations" v-bind:key="citation.id" class="gr-12">
            <div class="x-bloccitations pad-bloc">
                <div class="bloc-citation">
                    <h2 class="citation text-color">
                        {{ citation.content }}
                    </h2>
                    <h3 class="auteur-citation text-color">
                        <a href="#">{{ citation.author.firstName }} {{ citation.author.lastName }} </a>
                    </h3>
                    <h4 class="sign-citation">
                        lettre de 1648 e son fils. Parfois attribue aussi au
                        <span class="x-n">Cardinal de Richelieu</span>
                    </h4>
                    <div class="bloc-icon">
                        <div class="tag-text">
                            <a v-for="theme in citation.themes" v-bind:key="theme.id" href="#">{{ theme.name }}, </a>
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
</template>
<script lang="ts">
    export default {
        props: {
            citations: Array
        }
    }
</script>
