<script setup lang="ts">
import {ref , computed} from "vue";
import GoodsTag from "./GoodsTag.vue";
export interface Props {
    text:string,
    rows?:number,
    labels?:("tvGoods"|"mobilelive"|"traditional")[]
}
const props = withDefaults(defineProps<Props>(), {
    rows:1,
    labels:()=>[]
});

// Setup Computed
const _labels = computed(()=>{
    if(!Array.isArray(props.labels)) return []; // 배열이 아닌경우, 빈 배열로 리턴
    return props.labels.filter((label)=>{
        return (/tvGoods|mobilelive|traditional/).test(label);
    });
});
const _rows = computed(()=>{
    if(props.rows<1) return 1;
    if(3 < props.rows) return "auto";
    return props.rows;
});
</script>
<template>
<div :class="'a-goodsName -row'+_rows">
    <span class="a-goodsName__label" v-if="_labels.length">
        <GoodsTag v-for="(label,idx) in _labels" :label="label"></GoodsTag>
    </span>
    <span class="a-goodsName__name">{{text}}</span>
</div>
</template>
<style lang="scss">
/* 전시 > 상품 > 상품명 */
.a-goodsName{display:-webkit-box;width:100%;overflow:hidden;text-overflow:ellipsis;word-break:break-all;font-size:15px;color:#333;line-height:20px;-webkit-box-orient:vertical;
    &__label{padding-right:3px;}
}
.a-goodsName.-row1{height:20px;-webkit-line-clamp:1;line-clamp:1}
.a-goodsName.-row2{height:39px;-webkit-line-clamp:2;line-clamp:2}
.a-goodsName.-row3{height:60px;-webkit-line-clamp:3;line-clamp:3}
.a-goodsName.-rowauto{display:inline-block}
.a-goodsName .a-goodsName__name{display:inline}
</style>