<template>
    <div v-if="this.$store.getters.showNavBarSearch" class="loup-rech" id="loop-icon">
        <div class="padding nav-not-hide">
            <span @click="showNavBarSearch" id="span-loop"></span>
            <form>
                <input type="search" name="" id="x-loop" placeholder="Tapez un nom, un prenom...">
                <input type="submit" name="" id="x-sub" value="RECHERCHER">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
      methods:{
        showNavBarSearch(){
          this.$store.dispatch("showNavBarSearch")
        }
      }
    }
</script>
