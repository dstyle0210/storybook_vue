<script setup lang="ts">
import { computed } from "vue";
import A_ViewLabel from "../../01_atom/Global/ViewLabel.vue";
import A_LiveStreamingInfo from "../../01_atom/Global/LiveStreamingInfo.vue";
import A_GoodsName from "../../01_atom/Goods/GoodsName.vue";
import A_GoodsPrice from "../../01_atom/Goods/GoodsPrice.vue";
import type {
    ViewLabelIF,
    LiveStreamingInfoIF,
    GoodsNameIF,
    GoodsPriceIF
} from "../../01_atom/Global/atom.global"

export interface viewLabelProps extends ViewLabelIF {
    show:boolean
}
export interface Props {
    modifier?:string, // 모듈 수정자
    posterSrc?:string, // 포스터 경로
    viewLabel?:viewLabelProps, // ViewLabel 컴포넌트 속성
    liveStreamingInfo?:LiveStreamingInfoIF,
    goodsName?:GoodsNameIF,
    goodsPrice?:GoodsPriceIF
}
const props = withDefaults(defineProps<Props>(), {}); // Props 설정
const emit = defineEmits(["posterLink","infoLink"]); // 부모에게서 이벤트 가져오기

// computed
const _modifier = (props.modifier) ? " -"+props.modifier : ""; // 수정자 클래스
const _posterSrc = () => {
    if(props.posterSrc){
        return props.posterSrc;
    }else{
        return "";
    }
}
const _viewLabel = computed(()=>{
    let data = {show:false};
    if(props.viewLabel){
        data = Object.assign(data,{
            type:props.viewLabel.type,
            count:props.viewLabel.count
        })
    }
    return data;
});


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
    <article :class="'m-goodsTall'+_modifier"> 
        <a @click="posterLink" class="m-goodsTall__poster">
            <figure><img :alt="goodsName" class="-originToCdnReady -originToCdn -originToCdnComplete" :src="posterSrc"></figure>
            <A_ViewLabel v-bind="_viewLabel" v-if="_viewLabel.show"></A_ViewLabel>
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