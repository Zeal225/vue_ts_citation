<template>
    <div>
        <Header v-slot:header-content>
            <MemberNavigationSection></MemberNavigationSection>
        </Header>
        <SectionMyCitation></SectionMyCitation>
    </div>
</template>

<script lang="ts">
    import Header from "@/components/Header.vue";
    import MemberNavigationSection from "@/components/MemberNavigationSection.vue";
    import SectionMyCitation from "@/components/SectionMyCitation.vue";
    export default {
        components: {
            Header,
            MemberNavigationSection,
            SectionMyCitation
        }
    }
</script>
