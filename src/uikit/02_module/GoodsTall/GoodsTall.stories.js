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
      vodViews:{
        description:`VOD 시청횟수`
      },
      posterSrc:{
        description:`포스터 이미지 경로`
      },
      onClick:{ // preview.js 안에 parameter을 통해 action으로 적용 된다.
        
      } 
    }
  };

const Template = (args) => ({
  components: { GoodsTall },  
  setup() {
    return { args };
  },
  methods:{
    posterLink:(arg)=>{
      alert(arg);
    },
    infoLink:(arg)=>{
      alert(arg);
    }
  },
  template: '<goods-tall v-bind="args" @posterLink="posterLink" @infoLink="infoLink" />'
});

export const 기본형태 = Template.bind({});
기본형태.args = {
  modifier:"storybook",
  goodsName:"[서위트 파파] 경북 보조개 알뜰사과(부사) 3kg",
  goodsPrice:10900,
  vodViews:"4747", 
  posterSrc:"https://img.publichs.com/MLC/brc/7504/thumbnail.jpg"
};

export const 데이터없음 = Template.bind({});
데이터없음.args = {modifier:"storybook"};