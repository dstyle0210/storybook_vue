<script setup lang="ts">
import Price from "../Price.vue";
</script>
<template>
    <Price :price="10000" size="xs"></Price>
    <Price :price="10000" size="sm"></Price>
    <Price :price="10000" size="nm"></Price>
    <Price :price="10000" size="lg"></Price>
    <Price :price="10000" size="xl"></Price>
</template>
<style scoped>
.a-price{margin:10px;}
</style>