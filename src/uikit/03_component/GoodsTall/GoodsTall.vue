<script setup lang="ts">
import M_GoodsTall from "../../02_module/GoodsTall/GoodsTall.vue";

export interface Props {
    modifier?:string,
    list:Object[],
    total?:number
}
const props = withDefaults(defineProps<Props>(), {
    modifier:"",
    total:10
});
</script>
<template>
    <article id="mlcContents" class="c-goodsTalls">
        <M_GoodsTall v-for="(data,idx) in list" :key="idx" v-bind="data" modifier="cGoodsTall"></M_GoodsTall>
    </article>
</template>
<style lang="scss">
@import "./GoodsTall.scss";
</style>