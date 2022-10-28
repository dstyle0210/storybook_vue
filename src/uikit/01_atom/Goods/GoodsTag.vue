<script setup lang="ts">
type Label = ("tvGoods"|"mobilelive"|"traditional");
defineProps<{
    label:Label
}>()
interface LabelTextData {
    tvGoods:string,
    mobilelive:string,
    traditional:string
}
const labelTextData:LabelTextData = {
    tvGoods:"TV",
    mobilelive:"공영라방",
    traditional:"전통시장"
}
</script>
<template>
    <span :class="'a-goodsTag -'+label"><span class="a-goodsTag__text">{{labelTextData[label]}}</span></span>
</template>
<style lang="scss">
/* 공통 > 태그(라벨) */
.a-goodsTag{display:inline-block;border-radius:5px;text-align:center;text-decoration:none;line-height:normal;
    font-size:11px;background:0 0;
    *{font-weight:700;line-height:normal}
    &.-tvGoods{padding:0 5px;border:1px solid #f52739;color:#f52739;}
    &.-mobilelive{padding:0 5px;border:1px solid #9934f2;color:#9934f2;height:17px;line-height:16px}
    &.-traditional{padding:0 5px;border:1px solid #182888;color:#182888;}
    + &{margin-left:2px;}
}
/*
.a-goodsTag.-promotion img{width:100%;height:auto}
.a-goodsTag.-goodsThumb{width:35px;height:35px}
.a-goodsTag.-goodsThumb.-tvGoods{padding-top:2px;height:35px;background:rgba(255,255,255,.5)}
.a-goodsTag.-goodsThumb.-mobilelive,.a-goodsTag.-goodsThumb.-traditional{padding-top:3px;height:35px;background:rgba(255,255,255,.5)}
.a-goodsTag.-goodsName.-traditional,.a-goodsTag.-goodsName.-tvGoods{height:17px;line-height:16px}
*/
</style>