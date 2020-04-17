<template>
    <div>
        <Header></Header>
        <SectionAuthor></SectionAuthor>
    </div>
</template>

<script lang="ts">
    import Header from "@/components/Header.vue";
    import SectionAuthor from "@/components/SectionAuthorWithCitation.vue";
    export default {
        components: {
            SectionAuthor,
            Header
        }
    }
</script>
