<script setup lang="ts">
import { propsToAttrMap } from "@vue/shared";
import {computed} from "vue";
const props = defineProps<{
    count:number
}>();
const _count = computed(()=>{
    if(props.count<0){
        return "0";
    }else if(9999 < props.count){
        return "9999+";
    };
    return props.count+"";
});
</script>
<template>
    <span class="a-viewLabel" v-if="_count">{{_count}}</span>
</template>
<style lang="scss">
@import "./ViewLabel.scss";
</style>