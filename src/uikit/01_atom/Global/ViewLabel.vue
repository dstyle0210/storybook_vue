<script setup lang="ts">
import { propsToAttrMap } from "@vue/shared";
import {computed} from "vue";
export interface Props {
    type:"count"|"live",
    count?:number
}
const props = withDefaults(defineProps<Props>(), {
    type:"count",
    count:0
});

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
    <span class="a-viewLabel" v-if="type=='count'">{{_count}}</span>
    <span class="a-liveLabel" v-else><img src="https://img.publichs.com/ECMCFO/mc_images/uikit/atom/display/icoLive.gif" alt="LIVE"></span>
</template>
<style lang="scss">
@import "./ViewLabel.scss";
</style>