<script setup lang="ts">
import GoodsName from "../GoodsName.vue";
</script>
<template>
    <table class="storybookPreview">
    <thead>
        <tr>
            <th>text</th>
            <th>arg</th>
            <th>component</th>
            <th>설명</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>"텍스트"</td>
            <td>-</td>
            <td><GoodsName text="텍스트"></GoodsName></td>
            <td>텍스트만 넣음</td>
        </tr>
        <tr>
            <td>"텍스트"</td>
            <td>-</td>
            <td><GoodsName text="텍스트"></GoodsName></td>
            <td>텍스트만 넣음</td>
        </tr>
    </tbody>
</table>
</template>
<style lang="scss">
.storybookPreview{width:100%;
    th,td{padding:5px;border:1px solid #333;text-align:center;}
}
</style>