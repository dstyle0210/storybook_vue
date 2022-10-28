<script setup lang="ts">
import GoodsTall from '../uikit/03_component/GoodsTall/GoodsTall.vue'
import GoodsPrice from '../uikit/01_atom/Goods/GoodsPrice.vue';
import Price from '../uikit/01_atom/Global/Price.vue';
import MOCK_list from "../mock/labang.json";
const list = MOCK_list.prdList.map((mock) => {
    return {
        origin:mock,
        goodsSrc:mock.fileName, // 상품 대표이미지
        goodsName:mock.bnrText,
        goodsNo:mock.goodsNo,
        bnrExt:mock.bnrUrl,
        goodsPrice:mock.prdPrc,
        vodViews:mock.suppId
    };
});
</script>

<template>
  <header>헤더</header>
  <main>
<!--
    <Price :price="1000"></Price>
    <Price :price="1000" type="rental"></Price>
    <Price :price="1000" type="recurrent"></Price>
    <Price :price="1000" type="hidden"></Price>
    <Price :price="1000" type="normal" :isOptions="true"></Price>

    <Price :price="1000" size="xs"></Price>
    <Price :price="1000" size="xs" type="rental"></Price>
    <Price :price="1000" size="xs" type="recurrent"></Price>
    <Price :price="1000" size="xs" type="hidden"></Price>
    <Price :price="1000" size="xs" type="normal" :isOptions="true"></Price>

    <Price :price="1000" size="sm"></Price>
    <Price :price="1000" size="lg"></Price>
    <Price :price="1000" size="xl"></Price>

    <Price :price="1000" :isDelete="true"></Price>
-->

    <!--<GoodsTall :list="list" :total="5" modifier="home"></GoodsTall>-->
    
    <GoodsPrice :price="9000" :origin="20000" type="discount"></GoodsPrice>
    <GoodsPrice :price="9000" :origin="20000" type="discount" :isOptions="true"></GoodsPrice>
    <GoodsPrice :price="9000" :origin="20000" type="deal"></GoodsPrice>
    <GoodsPrice :price="9000" :origin="20000" type="rental"></GoodsPrice>
    <GoodsPrice :price="9000" :origin="20000" type="recurrent"></GoodsPrice>
    <GoodsPrice :price="9000" :origin="20000" type="hidden-discount"></GoodsPrice>
    <GoodsPrice :price="9000" :origin="20000" type="hidden-deal"></GoodsPrice>

  </main>
  <footer>풋터</footer>
</template>

<style scoped>
header{background:#f5f5f5;text-align:center;font-size:13px;height:40px;}
footer{background:#f5f5f5;text-align:center;font-size:13px;height:40px;}
</style>