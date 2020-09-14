<template>
    <h3 class="teme">

      <span v-for="(author, index) in authors" v-bind:key="author.id" :v-if="index < 20">
           <router-link tag="a" :to="{ name: 'author-citations', params: { id: author.id }}">{{ author.firstName }} {{ author.lastName}}</router-link>
            <span class="serparateur"></span>
        </span>
    </h3>
</template>

<script lang="ts">
export default {
    props:{
        authors: Array
    }
}
</script>

<style scoped>
    .teme {
        display: flex;
        flex-wrap: wrap;
    }
</style>