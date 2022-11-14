import '../../../00_base/reset.scss';
import {createType} from "../../../../../.storybook/createType.js";
import LiveStreamingInfo from "../LiveStreamingInfo.vue";

export default { 
  title: 'UIKIT/Atom/LiveStreamingInfo',
  component: LiveStreamingInfo,
  argTypes:{
    type:createType("방송시간라벨 표시방법","select",{
        null:"시간미표시",
        time:"props.time 시간표시",
        countdown:"props.endTime까지 남은시간 표시, 이후 '종료' 표시 됨",
        refresh:"props.endTime까지 남은시간 표시, 이후 '새로고침' 표시 됨"
    }),
    time:createType("표시할 시간","number","Date | number(seconds) | string ('HH:MM:SS')"),
    dueDate:createType("마감시간","text",`Date | string ("YYYY-MM-DD HH:MM:SS")`)
  }
}

const Template = (args) => ({
  components: { LiveStreamingInfo },
  setup() {
    return { args };
  },
  template: '<live-streaming-info v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
  type:"null"
};

export const 시간만표시 = Template.bind({});
시간만표시.args = {
  type:"time"
};

const endT = new Date();
endT.setSeconds(endT.getSeconds() + 7);
export const 카운트다운 = Template.bind({});
카운트다운.args = {
  type:"countdown",
  dueDate:endT
};
export const 리프레쉬 = Template.bind({});
리프레쉬.args = {
  type:"refresh",
  dueDate:endT
};