import '../../00_base/reset.scss';
import {createType} from "../../../../.storybook/createType.js";
import GoodsPrice from "./GoodsPrice.vue";
export default { 
  title: 'UIKIT/Atom/GoodsPrice',
  component: GoodsPrice,
  argTypes:{
    price:createType("상품의 판매가","number"),
    origin:createType("상품의 정상가(할인이전)","number"),
    type:createType("표시될 가격 형식","select",{
      discount:"할인가 표시",
      deal:"판매가 표시",
      rental:"상담접수상품",
      recurrent:"월 자동결제 (월 xx,xxx원)",
      "hidden-discount":"할인가 형식 + 가격숨김처리(??,???원)",
      "hidden-deal":"판매가 형식 + 가격숨김처리(??,???원)"
    }),
    isOptions:createType("옵션가격 적용여부","boolean",{
      "true":"금액뒤에 ~ 붙음",
      "false":"금액뒤에 ~ 안붙음"
    })
  },
}

const Template = (args) => ({
  components: { GoodsPrice },
  setup() {
    return { args };
  },
  template: '<goods-price v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
  price:9000,
  type:"deal",
  origin:10000,
  isOptions:false
};