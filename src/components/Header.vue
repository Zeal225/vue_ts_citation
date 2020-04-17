<template>
    <div>
        <div class="home x-header">
            <div  id="ad1" class="row color-pub style-pub">
                <div class="bandeau"></div>
            </div>
            <NavBar></NavBar>
            <slot name="header-content"></slot>
        </div>
        <SectionSearchBar></SectionSearchBar>
    </div>

</template>

<script lang="ts">
    import NavBar from "@/components/NavBar.vue";
    import SectionSearchBar from "@/components/SectionSearchBar.vue";
    export default {
        components: {
            NavBar,
            SectionSearchBar
        }
    }
</script>
