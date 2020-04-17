<template>
    <div>
        <Header></Header>
        <SectionTheme></SectionTheme>
    </div>
</template>

<script lang="ts">
    import Header from "@/components/Header.vue";
    import SectionTheme from "@/components/SectionTheme.vue";
    export default {
        components: {
            SectionTheme,
            Header
        }
    }
</script>
