import '../../00_base/reset.scss';
import GoodsTall from "./GoodsTall.vue";
export default {
    title: 'UIKIT/Module/GoodsTall',
    component: GoodsTall,
    argTypes: {
      goodsName:{
        description:"상품명이 입력되는 영역"
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

export const 기본템플릿 = Template.bind({});
기본템플릿.args = {modifier:"storybook"};

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