<template>
    <div>
        <div class="x-bloccitations po-center pad-bloc">
            <h2 class="theme citation text-color fz">{{ citation.content }}</h2>
            <h3 class="auteur-citation text-color">
                <a href="#" v-if="citation.author">{{ citation.author.firstName }} {{  citation.author.lastName }}
                </a></h3>
            <h4 class="sign-citation">lettre de 1648 e son fils. Parfois attribue aussi au Cardinal de Richelieu</h4>
            <div class="pad-bloc-top po-center">
                <div class="tag-text">
                  <router-link
                      v-for="theme in citation.themes"
                      :key="theme.id" :to="{ name: 'theme-citations', params: { theme: theme['@id'] }}"
                      tag="a">{{ theme.name }},
                  </router-link>
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
</template>
<script>
    export default {
        props: {
            citation: Object
        }
    }
</script>
