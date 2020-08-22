<template>
    <div v-if="this.$store.getters.showNavBarMenu" class="loup-rech" id="menu-icon">
        <div class="padding nav-not-hide">
            <span @click="showNavBarMenu" id="span-menu"></span>
            <ul class="x-l">
                <router-link tag="li" :to="{ name: 'theme'}">
                    <a>tous les themes</a>
                </router-link>
                <router-link tag="li" :to="{ name: 'auteur'}">
                    <a>tous les auteurs</a>
                </router-link>
                <!--                    <li><a href="mescitations.html"></a></li>-->
                <router-link tag="li" :to="{ name: 'member', params:{user: 78 }}">
                    <a>mon espace</a>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
      methods:{
        showNavBarMenu(){
          this.$store.dispatch("showNavBarMenu");
        }
      }
    }
</script>
