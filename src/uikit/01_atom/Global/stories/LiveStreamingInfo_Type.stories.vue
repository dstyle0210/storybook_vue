<script setup lang="ts">
import LiveStreamingInfo from "../LiveStreamingInfo.vue";

const endT = new Date();
endT.setHours(endT.getHours() + 9); // 표준시 +9시간 (한국)
endT.setSeconds(endT.getSeconds() + 30); // 현재시간 + 30초
const protoDueDate = endT.toISOString().split('.')[0]; // YYYY-MM-DDThh:mm:dd 로 변환

</script>
<template>
    <ul>
        <li>
            <h3>아이콘만 표시</h3>
            <LiveStreamingInfo type="null" />
        </li>
        <li>
            <h3>시간표시</h3>
            <LiveStreamingInfo type="time" :time="new Date()" />
        </li>
        <li>
            <h3>카운트다운:시간감소</h3>
            <LiveStreamingInfo type="countdown" :dueDate="protoDueDate" />
        </li>
        <li>
            <h3>새로고침 : 시간감소</h3>
            <LiveStreamingInfo type="refresh" :dueDate="protoDueDate" />
        </li>
    </ul>
</template>
<style>
ul{display:flex;}
li{flex:1;margin:0 10px;}
</style>

