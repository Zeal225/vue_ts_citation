<template>
    <div>
        <div class="cont swiper-container swiper-container-horizontal">
            <div class="swiper-wrapper">
                <div v-for="citation in randomCitation" v-bind:key="citation.id" class="swiper-slide paddin-lr">
                    <div class="back-slide container">
                        <h2 class="slide-text fz">{{ citation.content }}</h2>
                        <h3 class="slide-auteur">
                            {{ citation.author.firstName }} {{ citation.author.lastName }}
                        </h3>
                        <h4 class="slide-auteur font-small col-gre">
                            lettre de 1648 e son fils. Parfois attribue aussi au Cardinal de Richelieu
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
            <div class="container">
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    export default {
        props: {
            randomCitation: Array
        }
    }
</script>
