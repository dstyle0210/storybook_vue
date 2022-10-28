<script setup lang="ts">
defineProps<{
    count?:string
}>();
</script>
<template>
    <span class="a-viewLabel" v-if="count">{{count}}</span>
</template>
<style lang="scss">
@import "./ViewLabel.scss";
</style>