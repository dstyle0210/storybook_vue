<template>
    <span class="a-liveStreamingInfo"></span>
</template>
<style>
.a-liveStreamingInfo{position:relative;padding:4px;min-width:25px;height:25px;overflow:hidden;border-radius:12.5px;line-height:17px;background:rgba(0,0,0,.5)}
.a-liveStreamingInfo:after{display:block;position:absolute;top:4px;right:4px;width:17px;height:17px;content:"";background:url(//img.publichs.com/ECMCFO/mc_images/uikit/module/display/icoStreamingMark.png) no-repeat center center;background-size:17px 17px}
.a-liveStreamingInfo.-refresh:after{display:block;top:7px;right:7px;width:16px;height:13px;background:url(//img.publichs.com/ECMCFO/mc_images/uikit/module/display/icoRefresh2.png) no-repeat center center;background-size:16px 13px}
.a-liveStreamingInfo.-end .a-liveStreamingInfo__timer{padding:0 35px 0 18px}
.a-liveStreamingInfo__timer{display:inline-block;padding:0 24px 0 7px;font-weight:700;font-size:12px;color:#fff;line-height:12px}
</style>