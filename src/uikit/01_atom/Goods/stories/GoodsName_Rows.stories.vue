<script setup lang="ts">
import GoodsName from "../GoodsName.vue";
const text = "적당한 상품명 적당한 상품명 적당한 상품명";
const long = "상품명영역이 많이 들어갈경우상품명영역이 많이 들어갈경우상품명영역이 많이 들어갈경우상품명영역이 많이 들어갈경우상품명영역이 많이 들어갈경우";
</script>
<template>
    <h2>내용이 짧을 경우</h2>
    <ul>
        <li>
            <h3>1줄</h3>
            <GoodsName :text="text" :rows="1"></GoodsName>
        </li>
        <li>
            <h3>2줄</h3>
            <GoodsName :text="text" :rows="2"></GoodsName>
        </li>
        <li>
            <h3>3줄</h3>
            <GoodsName :text="text" :rows="3"></GoodsName>
        </li>
        <li>
            <h3>자동 (rows=4)</h3>
            <GoodsName :text="text" :rows="4"></GoodsName>
        </li>
    </ul>
    <h2>내용이 긴 경우</h2>
    <ul>
        <li>
            <h3>1줄</h3>
            <GoodsName :text="long" :rows="1"></GoodsName>
        </li>
        <li>
            <h3>2줄</h3>
            <GoodsName :text="long" :rows="2"></GoodsName>
        </li>
        <li>
            <h3>3줄</h3>
            <GoodsName :text="long" :rows="3"></GoodsName>
        </li>
        <li>
            <h3>자동 (rows=4)</h3>
            <GoodsName :text="long" :rows="4"></GoodsName>
        </li>
    </ul>
</template>

<style scoped lang="scss">
ul{display:flex;}
li{flex:1;margin:0 10px;
    .a-goodsName{outline:1px dashed #666;}
}
</style>
