<script setup lang="ts">
import {computed} from "vue";
export interface Props {
    price:number, // 판매가
    type?:"normal"|"rental"|"recurrent"|"hidden", // 표시형식
    size?:"xs"|"sm"|"nm"|"lg"|"xl",
    isOptions?:boolean,
    isDelete?:boolean
}
const props = withDefaults(defineProps<Props>(), {
    type:"normal",
    size:"nm",
    isOptions:false,
    isDelete:false
});

const _price = computed(()=>{
    if( props.type=="rental" ) return "상담접수상품";
    let price = props.price.toLocaleString();
    if(props.type=="hidden"){
        return [...price].map((num)=>{
            return (num==",") ? "," : "?";
        }).join("");
    };
    return price;
});
const _modifier = computed(()=>{
    let result = `-${props.type}`;
    result += (props.isOptions) ? " -options" : "";
    result += (props.isDelete) ? " -delete" : "";
    result += (props.size) ? ` -${props.size}` : "";
    return result;
});
</script>
<template>
    <span :class="`a-price ${_modifier}`"><strong>{{_price}}</strong></span>
</template>
<style lang="scss">
@import "./Price.scss";
</style>