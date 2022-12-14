<script setup lang="ts">
import {computed,onMounted,ref} from "vue";
export interface Props {
    type:"null"|"time"|"countdown"|"refresh", // 표시형식
    time?:Date|number|string, // type이 time인 경우, 표시할 시간(초)
    dueDate?:Date|string // YYYY-MM-DD HH:MM:SS
}
const props = withDefaults(defineProps<Props>(), {
    type:"null",
    time:0,
    dueDate:()=>new Date()
});
const modifierClass = ref("");

const _time = computed(()=>{
    const vaildation = new RegExp(/^(0\d|1\d|2[0-3]):[0-5]\d:[0-5]\d$/); // "HH:MM:SS"
    if(props.time instanceof Date){
        let HH = props.time.getHours() * 3600;
        let MM = props.time.getMinutes() * 60;
        let SS = props.time.getSeconds();
        return (HH + MM + SS)*1000;
    }else if(typeof props.time == "number"){
        return props.time * 1000;
    }else if(typeof props.time == "string" && vaildation.test(props.time)){
        const t = props.time.split(":");
        let HH = Number(t[0]) * 3600;
        let MM = Number(t[1]) * 60;
        let SS = Number(t[2]);
        return (HH + MM + SS)*1000;
    };
    return 0;
});

const _dueDate = computed(()=>{
    const vaildation = new RegExp(/^\d{4}-(0[1-9]|1[0-2])-([0-2]\d|3[01])[T\s](0\d|1\d|2[0-3]):[0-5]\d:[0-5]\d$/);
    if(props.dueDate instanceof Date){
        return props.dueDate.getTime();
    }else if(typeof props.dueDate == "string" && vaildation.test(props.dueDate)){
        return new Date(props.dueDate).getTime();
    }else if(typeof props.dueDate == "number"){
        return new Date(props.dueDate).getTime();
    }
    return 0;
});

const _now = ref(new Date().getTime()); // 현재 시간

const _text = computed(() => {
    // 시간계산을 위한 기초함수
    const floor = (num:number) => Math.floor(num);
    function tic(num:number):string{
        return (num<10) ? "0"+num : ""+num;
    };
    function getTimeText(msec:number){
        const total = floor( (msec/1000)%86400 );
        let sec = floor(total%60);
        let min = floor( (total/60)%60);
        let hour = floor( (total/60/60)%24);
        let day = floor( (msec/1000)/86400 ) * 24;
        return `${tic(hour+day)}:${tic(min)}:${tic(sec)}`;
    };

    // 리턴값들
    if(props.type=="null") return "";
    if(props.type=="time") {
        return getTimeText(_time.value); // 받은시간 그대로 넘김
    }
    let gap = _dueDate.value - _now.value;
    if(0<gap){
        return getTimeText(gap); // countdown 및 refresh는 diff 시간으로 표시
    }else{
        modifierClass.value = (props.type=="countdown") ? " -end":" -refresh";
        return (props.type=="countdown") ? "종료" : "새로고침";

    };
});

onMounted(()=>{
    const timer = setInterval(()=>{
        _now.value = new Date().getTime();
        let gap = _dueDate.value - _now.value;
        if(gap<0){
            clearInterval(timer); 
        };
    },1000);
})

</script>
<template>
    <span :class="'a-liveStreamingInfo' + modifierClass">
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