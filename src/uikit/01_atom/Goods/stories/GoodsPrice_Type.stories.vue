<script setup lang="ts">
import GoodsPrice from "../GoodsPrice.vue";
</script>
<template>
    <ul>
        <li>
            <h3>할인가</h3>
            <GoodsPrice :price="10000" type="discount" :origin="20000"></GoodsPrice>
        </li>
        <li>
            <h3>판매가</h3>
            <GoodsPrice :price="10000" type="deal" :origin="20000"></GoodsPrice>
        </li>
        <li>
            <h3>상담접수상품</h3>
            <GoodsPrice :price="10000" type="rental" :origin="20000"></GoodsPrice>
        </li>
        <li>
            <h3>월결제</h3>
            <GoodsPrice :price="10000" type="recurrent" :origin="20000"></GoodsPrice>
        </li>
        <li>
            <h3>할인가 숨김처리</h3>
            <GoodsPrice :price="10000" type="hidden-discount" :origin="20000"></GoodsPrice>
        </li>
        <li>
            <h3>판매가 숨김처리</h3>
            <GoodsPrice :price="10000" type="hidden-deal" :origin="20000"></GoodsPrice>
        </li>
    </ul>
</template>

<style scoped lang="scss">
ul{display:flex;flex-wrap:wrap;}
h3{font-size:14px;border-bottom:1px dashed #666; margin-bottom:10px;}
li{flex:0 0 25%;margin:10px;
    .a-goodsName{outline:1px dashed #666;}
}
</style>
