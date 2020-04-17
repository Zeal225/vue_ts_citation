<template>
    <div class="loup-rech dis-n" id="menu-icon">
        <div class="padding">
            <span id="span-menu"></span>
            <ul class="x-l">
                <router-link tag="li" :to="{ name: 'theme'}">
                    <a>tous les themes</a>
                </router-link>
                <router-link tag="li" :to="{ name: 'auteur'}">
                    <a>tous les auteurs</a>
                </router-link>
                <!--                    <li><a href="mescitations.html"></a></li>-->
                <router-link tag="li" :to="{ name: 'member', params:{user: 78 }}">
                    <a>mon espace</a>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    export default {}
</script>
