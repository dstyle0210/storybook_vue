import '../../00_base/reset.scss';
import GoodsPrice from "./GoodsPrice.vue";
export default { 
  title: 'UIKIT/Atom/GoodsPrice',
  component: GoodsPrice,
  argTypes:{
    price:{
      description:"판매가"
    },
    origin:{
      description:`정상가(할인이전)`
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