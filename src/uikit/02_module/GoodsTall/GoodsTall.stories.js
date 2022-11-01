import '../../00_base/reset.scss';
import GoodsTall from "./GoodsTall.vue";
export default {
    title: 'UIKIT/Module/GoodsTall',
    component: GoodsTall,
    argTypes: {
      modifier:{
        description:`Atomic 적용에 따른, CSS 수정자`
      },
      goodsName:{
        description:"상품명이 입력되는 영역"
      },
      goodsPrice:{
        description:"상품의 판매가"
      },
      goodsOrigin:{
        description:"상품의 정상가"
      },
      vodViews:{
        description:`VOD 시청횟수`
      },
      goodsNo:{
        description:`상품코드`
      },
      bnrExt:{
        description:`포스터 이미지 확장자`
      },
      onClick:{} // preview.js 안에 parameter을 통해 action으로 적용 된다.
    }
  };

const Template = (args) => ({
  components: { GoodsTall },  
  setup() {
    return { args };
  },
  template: '<goods-tall v-bind="args" />'
});

export const 기본형태 = Template.bind({});
기본형태.args = {modifier:"storybook"};

export const 데이터표시 = Template.bind({});
데이터표시.args = {
  modifier:"storybook",
  goodsName:"[서위트 파파] 경북 보조개 알뜰사과(부사) 3kg",
  goodsPrice:10900,
  goodsOrigin:9000,
  vodViews:"4747", 
  goodsNo:"7504",
  bnrExt:"jpg",
};