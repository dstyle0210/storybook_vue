import '../../../00_base/reset.scss';
import {createType} from "../../../../../.storybook/createType.js";
import Price from "../Price.vue";
export default { 
  title: 'UIKIT/Atom/Price',
  component: Price,
  argTypes:{
    price:createType("판매가","number"),
    type:createType("표시될 가격 형식","radio",{
      "normal" : "기본형태(xx,xxx원)",
      "rental" : "상담접수상품",
      "recurrent" : "월 자동결제 (월 xx,xxx원)",
      "hidden" : "가격숨김처리 (??,???원)"
    }),
    size:createType("글자크기","radio",{
      "xs" : "최소(12px)",
      "sm" : "소(15px)",
      "nm" : "보통(18px)",
      "lg" : "대(20px)",
      "xl" : "최대(24px)"
    }),
    isOptions:createType("옵션가격 적용(true시 금액 뒤에 ~ 붙음)","boolean"),
    isDelete:createType("삭제선 추가","boolean")
  }
}


const Template = (args) => ({
  components: { Price },
  setup() {
    return { args };
  },
  template: '<price v-bind="args" />'
});

export const 프로토타입 = Template.bind({});
프로토타입.args = {
  price:10000,
  type:"normal",
  size:"nm",
  isOptions:false,
  isDelete:false
};

export const 템플릿 = () => ({
  components:{ Price },
  template: '<price :price="10000" type="normal" size="nm" :isOptions="false" :isDelete="false" />'
})



// 타입별
import PriceTypePreview from "./Price.TypePreview.vue";
export const 타입별 = () => ({
  components:{ PriceTypePreview },
  template:'<price-type-preview />'
});

// 사이즈별
import PricePreviewSize from "./Price.PreviewSize.vue";
export const 사이즈별 = () => ({
  components:{ PricePreviewSize },
  template:'<price-preview-size />'
})