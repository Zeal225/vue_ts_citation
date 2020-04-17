<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <router-view/>
      <Footer></Footer>
  </div>
</template>
<script lang="ts">
    import Footer from "@/components/Footer.vue";
    export default {
        components: {
            Footer
        }
    }
</script>

<style lang="scss">
</style>
