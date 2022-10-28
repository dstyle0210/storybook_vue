<script setup lang="ts">
import { computed } from "vue";
import Price from "../Global/Price.vue";
export interface Props {
    price:number, // 판매가
    type?:"discount"|"deal"|"rental"|"recurrent"|"hidden-discount"|"hidden-deal", // 표시형식
    origin?:number, // 정상가(할인 전)
    isOptions?:boolean // 옵션에 따른 가격 여부
}
const props = withDefaults(defineProps<Props>(), {
    type:"deal",
    origin:0,
    isOptions:false
});

// Setup Computed
const _isHidden = computed(()=>{
    return (/hidden/).test(props.type);
});
const _type = computed(()=>{
    return (_isHidden.value) ? props.type.split("-")[1] : props.type;
});

// 할인율 구하기
const _discountPer = computed(()=>{
    let per = "-";
    if(props.origin){
        per = Math.floor( ((props.origin - props.price)/props.origin)*100 )+"";
    };
    if(_isHidden.value){
        per = [...per].map(()=>"?").join("");
    };
    return per+"%";
});
const _modifier = computed(()=>{
    let result = `-${props.type}`;
    result += (props.isOptions) ? " -options" : "";
    return result;
});
const _priceModifier = computed(()=>{
    if(props.type=="recurrent") return "recurrent";
    if(_isHidden.value) return "hidden";
    return "normal";
});

</script>
<template>
<div class="a-goodsPrice -rental" v-if="_type=='rental'">
  <span class="a-goodsPrice__price">
    <Price :price="price" type="rental"></Price>
  </span>
</div>
<div :class="`a-goodsPrice ${_modifier}`" v-if="_type!='rental'">
    <span class="a-goodsPrice__discountPercent" v-if="_type=='discount'">{{_discountPer}}</span>
    <span class="a-goodsPrice__price">
        <Price :price="price" :type="_priceModifier" :isOptions="isOptions"></Price>
    </span>
    <span class="a-goodsPrice__origin" v-if="_type=='discount'">
        <Price :price="origin" type="normal" size="xs" :isDelete="true" :isOptions="isOptions"></Price>
    </span>
</div>
</template>
<style lang="scss">
@import "./GoodsPrice.scss"; 
</style>