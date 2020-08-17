<template>
    <h3 class="teme">
        <span>
            <a v-for="author in authors" href="" v-bind:key="author.id">{{ author.firstName }} {{ author.lastName}}</a>
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