<script setup lang="ts">
import A_ViewLabel from "../../01_atom/ViewLabel/ViewLabel.vue";
import A_LiveStreamingInfo from "../../01_atom/LiveStreamingInfo/LiveStreamingInfo.vue";
import A_GoodsPrice from "../../01_atom/Goods/GoodsPrice.vue";
import A_GoodsName from "../../01_atom/Goods/GoodsName.vue";

export interface Props {
    modifier?:string,
    goodsName?:string,
    goodsPrice?:number,
    vodViews?:number,
    posterSrc?:string
}
const props = withDefaults(defineProps<Props>(), {
    modifier:"",
    goodsName:"상품명 영역", 
    goodsPrice:0, 
    vodViews:0,
});
const emit = defineEmits(["posterLink","infoLink"]); // 부모에게서 이벤트 가져오기


// data
const modifierClass = (props.modifier) ? " -"+props.modifier : ""; // 수정자 클래스


// Methods
function posterLink(e:any){
    alert("posterLink");
    emit("posterLink","emit.module.posterLink");
}
function infoLink(e:any){
    alert("infoLink");
    emit("infoLink","emit.module.infoLink");
    // props.click(); // props 에서 전달 받은 이벤트 실행
}
</script>
<template>
    <article :class="'m-goodsTall'+modifierClass"> 
        <a @click="posterLink" class="m-goodsTall__poster">
            <figure><img :alt="goodsName" class="-originToCdnReady -originToCdn -originToCdnComplete" :src="posterSrc"></figure>
            <A_ViewLabel :count="vodViews"></A_ViewLabel>
            <A_LiveStreamingInfo></A_LiveStreamingInfo>
        </a>
        <a @click="infoLink" class="m-goodsTall__info">
            <A_GoodsName :text="goodsName" :rows="2"></A_GoodsName>
            <A_GoodsPrice :price="goodsPrice" type="deal"></A_GoodsPrice>
        </a>
    </article>
</template>
<style lang="scss">
@import "./GoodsTall.scss";
</style>