import '../../../00_base/reset.scss';
import {createType} from "../../../../../.storybook/createType.js";
import GoodsName from "../GoodsName.vue";
export default { 
  title: 'UIKIT/Atom/Goods/GoodsName',
  component: GoodsName,
  argTypes:{
    text:createType(`상품명`,"text"),
    rows:createType(`상품명이 표시될 영역의 줄수(1~3 까지),<br />4이상의 경우 무제한(auto)로 적용`,"range",{min:1,max:4,step:1}),
    labels:createType("상품태그연결,배열 내 순서대로 적용됨","check",{
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

export const 프로토타입 = Template.bind({});
프로토타입.args = {
  text:"상품명 영역",
  labels:["tvGoods"],
  rows:1
};

export const 템플릿 = () => ({
  components: { GoodsName },
  template: `<goods-name text="상품명 영역" :labels="['tvGoods']" :rows="1" />`
});

import GoodsNameRows from "./GoodsName_Rows.stories.vue";
export const 표시줄수 = () => ({
  components: { GoodsNameRows },
  template: `<goods-name-rows  />`
});