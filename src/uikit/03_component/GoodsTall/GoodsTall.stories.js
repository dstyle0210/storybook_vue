import '../../00_base/reset.scss';
import GoodsTall from "./GoodsTall.vue";
export default {
    title: 'UIKIT/Component/GoodsTall',
    component: GoodsTall,
    argTypes: {
      list:{
        description:"방송상품 목록"
      }
    }
  };

const Template = (args) => ({
  components: { GoodsTall },  
  setup() {
    return { args };
  },
  template: '<goods-tall v-bind="args" />',
});

export const 기본템플릿 = Template.bind({});
기본템플릿.args = {
  modifier:"storybook",
  list:[{}]
};

import MOCK_list from "../../../mock/labang.json";
const list = MOCK_list.prdList.map((mock) => {
  return {
      origin:mock,
      goodsSrc:mock.fileName, // 상품 대표이미지
      goodsName:mock.bnrText,
      goodsNo:mock.goodsNo,
      bnrExt:mock.bnrUrl,
      goodsPrice:mock.prdPrc,
      vodViews:mock.suppId
  };
});
export const 데이터표시 = Template.bind({});
데이터표시.args = {
  modifier:"storybook",
  list:list
};