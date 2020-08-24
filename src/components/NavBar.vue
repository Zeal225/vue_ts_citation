<template>
    <div class="gr-12 x-citation">
        <h1>
<!--          <img src="images/quote_rig.svg" class="griff">-->
<!--          <img v-bind:src="'dist/images/mockup-img/'+category.image_categorie">-->
          <img src="/images/quote_rig.svg" class="griff">
          <span class="logo">
<!--                <a href="/" class="logo-color">citation-emporieum</a>-->

            <router-link tag="a" :to="{ name: 'home'}" class="logo-color">
                   citation-emporieum
            </router-link>
            </span>
        </h1>
        <ul class="x-menu">
            <li>
                <a @click="showNavBarSearch" href="#" id="nav-search">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                        <title>search-left-k</title>
                        <path d="M104.13,104.86L85.57,73.2A42.16,42.16,0,1,0,56.83,84.69,40.19,40.19,0,0,0,68,83l18.77,32a10.06,10.06,0,0,0,13.76,3.58A10,10,0,0,0,104.13,104.86ZM86.75,42.34A29.92,29.92,0,1,1,56.83,12.43,30,30,0,0,1,86.75,42.34Z"/>
                    </svg>
                </a>
            </li>
            <li @click="showNavBarMenu">
                <svg xml:space="preserve" enable-background="new 0 0 64 64" viewBox="0 0 64 64" y="0" x="0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="nav-iconic menu-icon" version="1.1">
							<rect height="6" width="50" fill="#fff" y="5"/>
                    <rect height="6" width="50" fill="#fff" y="28"/>
                    <rect height="6" width="50" fill="#fff" y="50"/>
						</svg>
            </li>
            <li @click="showNavBarConnexion">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><title>member-a-k</title><path d="M85.94,120H27.15c-0.14-1.42-.27-15.69-0.67-21.24C23.6,83.32,6.57,73.6,2.33,58.7-0.22,52.28-.44,44.94.53,38.05,2,27.86,5.92,17.9,15.27,11.48,25.7,3.74,38.63,1,52,0,65.84-.2,79.9,3.2,90.25,11.88c6.83,7.37,12.76,15.47,14.91,24.86,0.39,3.09-3.19,4.88-1.9,8l0.5,1.15c5.21,5.31,10.71,10.69,15.88,15.87a3,3,0,0,1-.43,3.4c-2.22,2.26-6.54,1.65-7.33,5.24-0.29,2.66,1.29,4.58,2.77,6.56,0.08,1.88-3.35,2.83-1.91,4.85,0.69,0.84,2.56,1.18,2.09,2.49-5.54,4.64,2.41,9,.43,14.29-1,2.63-4.17,2.82-6.65,3.29-6,1.21-12.43.61-17.61,3.64-4.93,3.43-4.43,9.35-5.06,14.46v0Z"/></svg>
            </li>
        </ul>
        <NavBarSearchBloc></NavBarSearchBloc>
        <NavBarLinkBloc></NavBarLinkBloc>
        <NavBarLoginBloc></NavBarLoginBloc>
        <NavBarRegisterBloc></NavBarRegisterBloc>
    </div>
</template>

<script>
    import NavBarLoginBloc from "@/components/NavBarLoginBloc.vue";
    import NavBarLinkBloc from "@/components/NavBarLinkBloc.vue";
    import NavBarSearchBloc from "@/components/NavBarSearchBloc.vue";
    import NavBarRegisterBloc from "@/components/NavBarRegisterBloc.vue";
    export default {
        components: {
            NavBarLoginBloc,
            NavBarLinkBloc,
            NavBarSearchBloc,
            NavBarRegisterBloc
        },
      data(){
        return{
        }
      },
        methods: {
          showNavBarSearch(){
            this.$store.dispatch("showNavBarSearch")
          },
          showNavBarMenu(){
            this.$store.dispatch("showNavBarMenu");
          },
          showNavBarConnexion(){
            this.$store.dispatch("showNavBarConnexion");
          }
        },
      created() {
      }
    }
</script>
