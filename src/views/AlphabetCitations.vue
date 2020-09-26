<template>
    <div>
        <Header v-slot:header-content>
        </Header>
      <AlphabetCitationList></AlphabetCitationList>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue";
    import AlphabetCitationList from "@/components/AlphabetCitationList";
    export default {
        components: {
            Header,
            AlphabetCitationList
        },
      created() {
          console.log("OK")
      }
    }
</script>
