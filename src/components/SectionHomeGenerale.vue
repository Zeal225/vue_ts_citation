<template>
    <div class="row pad-general x-row">
        <div class="container tes">
            <div>
                <GeneralSectionTitle  text="les plus recentes" css="x-titre text-color"></GeneralSectionTitle>
                <div class="no-padding gr-d-9 gr-tl-9 gr-t-12 gr-c-12">
                    <BlocCitationTypeMoreRecent></BlocCitationTypeMoreRecent>
                </div>
                <div class="gr-d-3 gr-tl-3 gr-t-12 gr-c-12 gauche">
                    <div class="gr-12 center-tag paddin-gr">
                        <GeneralSectionTitle text="tous les themes" css="text-color tag-title entete"></GeneralSectionTitle>
                        <ListAllTheme></ListAllTheme>
                    </div>
                    <div class="btn-group-parent gr-12">
                        <a href="" class="btn-style">Tous les themes</a>
                    </div>
                    <div class="gr-12 paddin-gr x-pub1 tof">
                        <img src="images/pub1.png">
                    </div>
                    <div class="gr-12 center-tag paddin-gr">
                        <GeneralSectionTitle text="tous les auteurs" css="text-color tag-title entete"></GeneralSectionTitle>
                        <ListAllAuthor></ListAllAuthor>
                    </div>
                    <div class="btn-group-parent gr-12">
                        <a href="" class="btn-style">Tous les auteurs</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import GeneralSectionTitle from "@/components/GeneralSectionTitle.vue";
    import BlocCitationTypeMoreRecent from "@/components/BlocCitationTypeMoreRecent.vue";
    import ListAllAuthor from "@/components/ListAllAuthor.vue";
    import ListAllTheme from "@/components/ListAllTheme.vue";
    export default {
        components: {
            GeneralSectionTitle,
            BlocCitationTypeMoreRecent,
            ListAllAuthor,
            ListAllTheme
        }
    }
</script>
