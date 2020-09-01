<template>
    <div>
        <Header v-slot:header-content>
        </Header>
        <SectionListCitation></SectionListCitation>
    </div>
</template>

<script lang="ts">
    import Header from "@/components/Header.vue";
    import SectionListCitation from "@/components/SectionListCitation.vue";
    export default {
        components: {
            Header,
            SectionListCitation
        }
    }
</script>
