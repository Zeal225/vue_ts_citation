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
<script>
    import Footer from "@/components/Footer.vue";
    export default {
        components: {
            Footer
        },
      mounted() {
          this.$store.commit('hideModal', ".x-menu, .nav-not-hide")
      }
    }
</script>
<style lang="scss">
</style>
