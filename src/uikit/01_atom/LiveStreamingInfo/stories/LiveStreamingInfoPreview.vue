<script setup lang="ts">
import LiveStreamingInfo from "../LiveStreamingInfo.vue";
const endT = new Date();
endT.setSeconds(endT.getSeconds() + 7);

const time0 = new Date();
const time1 = 70000; // 초 단위
const time2 = "21:10:10";
</script>
<template>
<table class="storybookPreview">
    <thead>
        <tr>
            <th>type*</th>
            <th>time</th>
            <th>dueDate</th>
            <th>component</th>
            <th>설명</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>null</td>
            <td>-</td>
            <td>-</td>
            <td><LiveStreamingInfo type="null"></LiveStreamingInfo></td>
            <td>시간조건 없음</td>
        </tr>
        <tr>
            <td>time</td>
            <td>new Date()</td>
            <td>-</td>
            <td><LiveStreamingInfo type="time" :time="time0"></LiveStreamingInfo></td>
            <td>날짜형식으로 입력</td>
        </tr>
        <tr>
            <td>time</td>
            <td>70000</td>
            <td>-</td>
            <td><LiveStreamingInfo type="time" :time="time1"></LiveStreamingInfo></td>
            <td>초 단위로 입력</td>
        </tr>
        <tr>
            <td>time</td>
            <td>"21:10:10"</td>
            <td>-</td>
            <td><LiveStreamingInfo type="time" :time="time2"></LiveStreamingInfo></td>
            <td>"HH:MM:SS" String 그대로 표시</td>
        </tr>
        <tr>
            <td>countdown</td>
            <td>-</td>
            <td>
                const endT = new Date(); 
                endT.setSeconds(endT.getSeconds() + 7);
            </td>
            <td><LiveStreamingInfo type="countdown" :dueDate="endT"></LiveStreamingInfo></td>
            <td>7초 후 종료</td>
        </tr>
        <tr>
            <td>refresh</td>
            <td>-</td>
            <td>
                const endT = new Date(); 
                endT.setSeconds(endT.getSeconds() + 7);
            </td>
            <td><LiveStreamingInfo type="refresh" :dueDate="endT"></LiveStreamingInfo></td>
            <td>7초 후 새로고침</td>
        </tr>
    </tbody>
</table>
</template>
<style lang="scss">
.storybookPreview{width:100%;
    th,td{padding:5px;border:1px solid #333;text-align:center;}
}
</style>