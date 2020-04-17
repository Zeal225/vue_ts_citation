<template>
    <div>
        <Header v-slot:header-content>
            <MemberNavigationSection></MemberNavigationSection>
        </Header>
        <SectionTheme></SectionTheme>
    </div>
</template>

<script lang="ts">
    import Header from "@/components/Header.vue";
    import MemberNavigationSection from "@/components/MemberNavigationSection.vue";
    import SectionTheme from "@/components/SectionTheme.vue";
    export default {
        components: {
            Header,
            MemberNavigationSection,
            SectionTheme
        }
    }
</script>
