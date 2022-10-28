<script setup lang="ts">
import A_ViewLabel from "../../01_atom/ViewLabel/ViewLabel.vue";
import A_LiveStreamingInfo from "../../01_atom/LiveStreamingInfo/LiveStreamingInfo.vue";
import A_GoodsPrice from "../../01_atom/Goods/GoodsPrice.vue";
import A_GoodsName from "../../01_atom/Goods/GoodsName.vue";

export interface Props {
    modifier?:string,
    goodsName?:string,
    goodsPrice?:number,
    goodsOrigin?:number,
    vodViews?:string,
    goodsNo?:string,
    bnrExt?:string
}
const props = withDefaults(defineProps<Props>(), {
    modifier:"",
    goodsName:"상품명 영역", 
    goodsPrice:0, 
    goodsOrigin:0,
    vodViews:"xxxx..",
    goodsNo:"xxxx",
    bnrExt:"jpg"
});
const emit = defineEmits(["posterLink","infoLink"]); // 부모에게서 이벤트 가져오기


// data
const modifierClass = (props.modifier) ? " -"+props.modifier : ""; // 수정자 클래스
const posterSrc = `https://img.publichs.com/MLC/brc/${props.goodsNo}/thumbnail.${props.bnrExt}` // 이미지 경로


// Methods
function posterLink(){
    emit("posterLink","포스터");
    console.log("포스터");
}
function infoLink(){
    emit("infoLink","인포");
    console.log("인포");
    // props.click(); // props 에서 전달 받은 이벤트 실행
}
</script>
<template>
    <article :class="'m-goodsTall'+modifierClass">
        <a @click="posterLink" class="m-goodsTall__poster">
            <figure><img :alt="goodsName" class="-originToCdnReady -originToCdn -originToCdnComplete" :src="posterSrc"></figure>
            <A_ViewLabel :count="vodViews+''"></A_ViewLabel>
            <A_LiveStreamingInfo></A_LiveStreamingInfo>
        </a>
        <a @click="infoLink" class="m-goodsTall__info">
            <A_GoodsName :text="goodsName"></A_GoodsName>
            <A_GoodsPrice :price="goodsPrice" :origin="goodsOrigin"></A_GoodsPrice>
        </a>
    </article>
</template>
<style lang="scss">
@import "./GoodsTall.scss"; 
</style>