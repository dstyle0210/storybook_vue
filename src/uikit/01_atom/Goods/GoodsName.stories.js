import '../../00_base/reset.scss';
import {createType} from "../../../../.storybook/createType.js";
import GoodsName from "./GoodsName.vue";
export default { 
  title: 'UIKIT/Atom/GoodsName',
  component: GoodsName,
  argTypes:{
    text:{
      description:"상품명"
    },
    rows:{
      description:`상품명이 표시될 영역의 줄수(1~3 까지),<br />4이상의 경우 무제한(auto)로 적용`
    },
    labels:createType("상품태그연결,배열 내 순서대로 적용됨",{
      "tvGoods":"TV상품",
      "mobilelive":"공영라방",
      "traditional":"전통시장"
    })
  },
}

const Template = (args) => ({
  components: { GoodsName },
  setup() {
    return { args };
  },
  template: '<goods-name v-bind="args" />'
});

export const 기본형태 = Template.bind({});
기본형태.args = {
  text:"기본형태",
};

export const 하드코어 = Template.bind({});
하드코어.args = {
  text:"컴포넌트 부하테스트컴포넌트 부하테스트컴포넌트 부하테스트컴포넌트 부하테스트컴포넌트 부하테스트컴포넌트 부하테스트",
  labels:["tvGoods","mobilelive","traditional"],
  rows:4
};