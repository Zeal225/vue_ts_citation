<template>
    <div>
        <Header></Header>
      <SectionAlphabetAuthorWithCitation></SectionAlphabetAuthorWithCitation>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue";
    //import SectionAuthor from "@/components/SectionAuthorWithCitation.vue";
    import SectionAlphabetAuthorWithCitation from "@/components/SectionAlphabetAuthorWithCitation";
    export default {
        components: {
          SectionAlphabetAuthorWithCitation,
            Header
        }
    }
</script>
