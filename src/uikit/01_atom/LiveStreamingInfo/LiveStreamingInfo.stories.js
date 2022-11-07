import '../../00_base/reset.scss';
import {createType} from "../../../../.storybook/createType.js";
import LiveStreamingInfo from "./LiveStreamingInfo.vue";

export default { 
  title: 'UIKIT/Atom/LiveStreamingInfo',
  component: LiveStreamingInfo,
  argTypes:{
    type:createType("방송시간라벨 표시방법",{
        null:"시간미표시",
        time:"props.time 시간표시",
        countdown:"props.endTime까지 남은시간 표시, 이후 '종료' 표시 됨",
        refresh:"props.endTime까지 남은시간 표시, 이후 '새로고침' 표시 됨"
    }),
    time:createType("표시할 시간","Date | number(seconds) | string ('HH:MM:SS')"),
    dueDate:createType("마감시간",`Date | string ("YYYY-MM-DD HH:MM:SS")`)
  }
}

const Template = (args) => ({
  components: { LiveStreamingInfo },
  setup() {
    return { args };
  },
  template: '<live-streaming-info v-bind="args" />'
});

export const 기본형태 = Template.bind({});
기본형태.args = {
  type:"null"
};

export const Time = Template.bind({});
Time.args = {
  type:"time",
  time:100000
};