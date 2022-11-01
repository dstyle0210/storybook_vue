<script setup lang="ts">
import { propsToAttrMap } from "@vue/shared";
import {computed} from "vue";
const props = defineProps<{
    count:number
}>();
const _count = computed(()=>{
    return props.count+"";
})
</script>
<template>
    <span class="a-viewLabel" v-if="_count">{{_count}}</span>
</template>
<style lang="scss">
@import "./ViewLabel.scss";
</style>