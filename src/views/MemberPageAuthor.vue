<template>
    <div>
        <Header v-slot:header-content>
            <MemberNavigationSection></MemberNavigationSection>
        </Header>
        <SectionAuthor></SectionAuthor>
    </div>
</template>

<script lang="ts">
    import Header from "@/components/Header.vue";
    import MemberNavigationSection from "@/components/MemberNavigationSection.vue";
    import SectionAuthor from "@/components/SectionAuthorWithCitation.vue";
    export default {
        components: {
            Header,
            MemberNavigationSection,
            SectionAuthor
        }
    }
</script>
