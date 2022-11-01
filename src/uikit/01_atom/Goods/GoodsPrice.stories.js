import '../../00_base/reset.scss';
import GoodsPrice from "./GoodsPrice.vue";
export default { 
  title: 'UIKIT/Atom/GoodsPrice',
  component: GoodsPrice,
  argTypes:{
    price:{
      description:"상품의 판매가"
    },
    origin:{
      description:`상품의 정상가(할인이전)`
    },
    type:{
      description:`표시될 가격 형식<br />
      "discount" : 할인가 표시<br />
      "deal" : 판매가 표시<br />
      "rental" : 상담접수상품<br />
      "recurrent" : 월 자동결제 (월 xx,xxx원)<br />
      "hidden-discount" : 할인가 형식 + 가격숨김처리(??,???원)<br />
      "hidden-deal" : 판매가 형식 + 가격숨김처리(??,???원)
      `,
      control: { type: 'select' },
      options: ['discount', 'deal', 'rental','recurrent','hidden-discount','hidden-deal']
    },
    isOptions:{
      description:`옵션가격 적용(true시 금액 뒤에 ~ 붙음)`
    }
  },
}

const Template = (args) => ({
  components: { GoodsPrice },
  setup() {
    return { args };
  },
  template: '<goods-price v-bind="args" />'
});

export const 기본형태 = Template.bind({});
기본형태.args = {
  price:9000,
  origin:10000
};