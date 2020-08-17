<template>
    <h3 class="teme">
        <span v-for="(theme, index) in themes" v-bind:key="theme.id" :v-if="index < 20">
            <a href="">{{ theme.name }}</a>
            <span class="serparateur"></span>
        </span>
    </h3>
</template>

<script>
    export default {
        props: {
            themes: Array
        }
    }
</script>

<style scoped>
    .teme {
        display: flex;
        flex-wrap: wrap;
    }
</style>
