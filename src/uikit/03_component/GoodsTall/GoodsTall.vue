<script setup lang="ts">
import {computed} from "vue";
import M_GoodsTall from "../../02_module/GoodsTall/GoodsTall.vue";
export interface Props {
    list:{
        origin:Object,
        goodsSrc:string,
        goodsName:string,
        goodsNo:string,
        bnrExt:string,
        goodsPrice:number,
        vodViews:number,
        posterSrc?:string
    }[],
    modifier?:string, // 수정자
    views?:number // 보이는 갯수
}
const props = withDefaults(defineProps<Props>(), {
    modifier:"",
    views:10
});

const _lists = computed(()=>{
    return props.list.map((goods)=>{
        goods.posterSrc = `https://img.publichs.com/MLC/brc/${goods.goodsNo}/thumbnail.${goods.bnrExt}`;
        return goods;
    });
});

</script>
<template>
    <article id="mlcContents" class="c-goodsTalls" v-if="list.length">
        <M_GoodsTall v-for="(data,idx) in _lists" :key="idx" v-bind="data" modifier="cGoodsTall"></M_GoodsTall>
    </article>
    <article id="mlcContents" class="c-goodsTalls" v-else>
        데이터없음
    </article>
</template>
<style lang="scss">
@import "./GoodsTall.scss";
</style>