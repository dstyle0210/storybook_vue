import '../../00_base/reset.scss';
import Price from "./Price.vue";
export default { 
  title: 'UIKIT/Atom/Price',
  component: Price,
  argTypes:{
    price:{
      description:"판매가"
    },
    type:{
      description:`표시될 가격 형식<br />
      "normal" : 기본형태(xx,xxx원)<br />
      "rental" : 상담접수상품<br />
      "recurrent" : 월 자동결제 (월 xx,xxx원)<br />
      "hidden" : 가격숨김처리 (??,???원)
      `,
      control: { type: 'select' },
      options: ['normal', 'rental', 'recurrent','hidden']
    },
    size:{
      description:`글자크기
      "" : 기본형태(nm과 같음)<br />
      "xs" : 최소(12px)<br />
      "sm" : 소(15px)<br />
      "nm" : 보통(18px)<br />
      "lg" : 대 (20px)<br />
      "xl" : 최대 (24px)
      `,
      control: { type: 'select' },
      options: ['설정없음','xs', 'sm', 'nm','lg','xl']
    },
    isOptions:{
      description:`옵션가격 적용(true시 금액 뒤에 ~ 붙음)`
    },
    isDelete:{
      description:`삭제선 추가`
    }
  },
}

const Template = (args) => ({
  components: { Price },
  setup() {
    return { args };
  },
  template: '<price v-bind="args" />'
});

export const 기본형태 = Template.bind({});
기본형태.args = {
  price:10000
};