<script setup lang="ts">
import {computed} from "vue";
export interface Props {
    time?:Date, // (시작)표시시간 , 없는경우 현재시간 표시
    endTime?:Date, // 방송종료시간(type이 countdown 이거나 refresh 인경우)
    type?:"null"|"time"|"countdown"|"refresh" // 표시형식
}
const props = withDefaults(defineProps<Props>(), {
    type:"countdown",
    time:()=>new Date(),
    endTime:()=>new Date()
});

const _text = computed(()=>{
    if(props.type=="null") return "";
    

    // 시간계산을 위한 기초함수
    const floor = (num:number) => Math.floor(num);
    function getTimeText(msec:number){
        const total = floor(msec/1000);
        let sec = total%60;
        let min = floor( (total/60)%60);
        let hour = floor( (total/3600)%24);
        return `${hour}:${min}:${sec}`;
    }
    if(props.type=="time") return props.time.getHours()+":"+props.time.getMinutes()+":"+props.time.getSeconds(); // 받은시간 그대로 넘김

    // 리턴값들
    // console.log( props.type , props.endTime.getTime() - props.time.getTime() );
    if(props.type=="countdown" || props.type=="refresh") return getTimeText(props.endTime.getTime() - props.time.getTime()); // countdown 및 refresh는 diff 시간으로 표시
});

</script>
<template>
    <span class="a-liveStreamingInfo">
        <span class="a-liveStreamingInfo__timer" v-if="type!='null'">{{_text}}</span>
    </span>
</template>
<style lang="scss">
.a-liveStreamingInfo{display:inline-flex;flex-direction:row;justify-content:center;align-items:center;position:relative;padding:4px;min-width:25px;height:25px;line-height:25px;overflow:hidden;border-radius:12.5px;background:rgba(0,0,0,.5);
    &:after{display:block;width:17px;height:17px;line-height:1px;content:"";background:url('//img.publichs.com/ECMCFO/mc_images/uikit/module/display/icoStreamingMark.png') no-repeat center center;background-size:17px 17px;}
    &.-refresh:after{width:16px;height:13px;background:url('//img.publichs.com/ECMCFO/mc_images/uikit/module/display/icoRefresh2.png') no-repeat center center;background-size:16px 13px}
    &__timer{display:inline-block;width:62px;padding:0 7px 0 7px;text-align:center;font-weight:700;font-size:12px;color:#fff;line-height:1px;}
}
</style>