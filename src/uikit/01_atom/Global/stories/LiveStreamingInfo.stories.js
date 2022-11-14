import '../../../00_base/reset.scss';
import {createType} from "../../../../../.storybook/createType.js";
import LiveStreamingInfo from "../LiveStreamingInfo.vue";

export default { 
  title: 'UIKIT/Atom/Global/LiveStreamingInfo',
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

const endT = new Date();
endT.setHours(endT.getHours() + 9);
endT.setSeconds(endT.getSeconds() + 30);
const protoDueDate = endT.toISOString().split('.')[0];

export const 프로토타입 = Template.bind({});
프로토타입.args = {
  type:"countdown",
  time:0,
  dueDate:protoDueDate
};

export const 템플릿 = () => ({
  components:{ LiveStreamingInfo },
  setup(){
    const endT = new Date();
    endT.setHours(endT.getHours() + 9); // 표준시 +9시간 (한국)
    endT.setSeconds(endT.getSeconds() + 30); // 현재시간 + 30초
    const protoDueDate = endT.toISOString().split('.')[0]; // YYYY-MM-DDThh:mm:dd 로 변환
    return {protoDueDate}
  },
  template: '<live-streaming-info type="countdown" :time="0" :dueDate="protoDueDate" />'
});



import LiveStreamingInfoTypeStories from "./LiveStreamingInfo_Type.stories.vue";
export const 타입별 = () => ({
  components:{ LiveStreamingInfoTypeStories },
  template:`<live-streaming-info-type-stories />`
});