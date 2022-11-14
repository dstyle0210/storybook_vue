import '../../../00_base/reset.scss';
import {createType} from "../../../../../.storybook/createType.js";
import ViewLabel from "../ViewLabel.vue";

export default { 
  title: 'UIKIT/Atom/Global/ViewLabel',
  component: ViewLabel,
  argTypes:{
    count:createType("VOD 시청횟수표시","number"),
    type:createType("라벨 표시방법","radio",{
      "count":"시청자수(조회수) 표시",
      "live":"현재 방송중"
    })
  }
}

const Template = (args) => ({
  components: { ViewLabel },
  setup() {
    return { args };
  },
  template: '<view-label v-bind="args" />'
});

export const 프로토타입 = Template.bind({});
프로토타입.args = {
  type:"count",
  count:0
};

export const 템플릿 = () => ({
  components:{ ViewLabel },
  template:`<view-label type="count" :count="999" /> <view-label type="live" />`
});