<script setup lang="ts">
import LiveStreamingInfo from "../uikit/01_atom/LiveStreamingInfo/LiveStreamingInfo.vue";
const endT = new Date();
endT.setSeconds(endT.getSeconds() + 7000);
</script>

<template>
  <header>헤더</header>
  <main>
    
    <LiveStreamingInfo type="null" :endTime="endT"></LiveStreamingInfo>
    <LiveStreamingInfo type="time"></LiveStreamingInfo>
    <LiveStreamingInfo type="countdown" :endTime="endT"></LiveStreamingInfo>
    <LiveStreamingInfo type="refresh" :endTime="endT"></LiveStreamingInfo>

  </main>
  <footer>풋터</footer>
</template>

<style scoped>
header{background:#f5f5f5;text-align:center;font-size:13px;height:40px;}
footer{background:#f5f5f5;text-align:center;font-size:13px;height:40px;}
</style>