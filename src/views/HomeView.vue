<script setup lang="ts">
import LiveStreamingInfo from "../uikit/01_atom/LiveStreamingInfo/LiveStreamingInfo.vue";
const endT = new Date();
endT.setSeconds(endT.getSeconds() + 7);

const time0 = new Date();
const time1 = 70000; // 초 단위
const time2 = "21:10:10";
</script>

<template>
  <header>헤더</header>
  <main>
    
    <LiveStreamingInfo type="null"></LiveStreamingInfo>
    
    <LiveStreamingInfo type="time" :time="time0"></LiveStreamingInfo>
    <LiveStreamingInfo type="time" :time="time1"></LiveStreamingInfo>
    <LiveStreamingInfo type="time" :time="time2"></LiveStreamingInfo>

    <LiveStreamingInfo type="countdown" :dueDate="endT"></LiveStreamingInfo>
    <LiveStreamingInfo type="refresh" :dueDate="endT"></LiveStreamingInfo>

  </main>
  <footer>풋터</footer>
</template>

<style scoped>
header{background:#f5f5f5;text-align:center;font-size:13px;height:40px;}
footer{background:#f5f5f5;text-align:center;font-size:13px;height:40px;}
</style>