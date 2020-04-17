<template>
    <h2 :class="[css]">
        {{ text }}
    </h2>
</template>

<script lang="ts">
export default {
    props: ['text', 'css']
}
</script>
