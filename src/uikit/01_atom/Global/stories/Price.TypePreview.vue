<script setup lang="ts">
import Price from "../Price.vue";
</script>
<template>
    <Price :price="10000" type="normal"></Price>
    <Price :price="10000" type="rental"></Price>
    <Price :price="10000" type="recurrent"></Price>
    <Price :price="10000" type="hidden"></Price>
</template>
<style scoped>
.a-price{margin:10px;}
</style>