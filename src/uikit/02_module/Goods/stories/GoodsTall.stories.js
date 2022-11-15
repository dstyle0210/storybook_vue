import '../../../00_base/reset.scss';
import {createType } from "../../../../../.storybook/createType";
import GoodsTall from "../GoodsTall.vue";
import {docsPath} from "../../../01_atom/Global/stories/atom.global.d";
export default {
    title: 'UIKIT/Module/Goods/GoodsTall',
    component: GoodsTall,
    argTypes: {
      onClick:{}, // preview.js 안에 parameter을 통해 action으로 적용 된다. 
      modifier:createType("Atomic 적용에 따른, CSS 수정자","text"),
      posterSrc:createType("포스터 이미지 경로","text","URL"),
      viewLabel:createType("시청자수 라벨 설정","object",docsPath.viewLabel),
      liveStreamingInfo:createType("영상표시영역 설정","object",docsPath.liveStreamingInfo),
      goodsName:createType("상품명 설정","object",docsPath.goodsName),
      goodsPrice:createType("상품가격 설정","object",docsPath.goodsPrice),
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

export const 프로토타입 = Template.bind({});
프로토타입.args = {
  modifier:"storybook",
  posterSrc:"https://img.publichs.com/MLC/brc/7504/thumbnail.jpg",
  viewLabel:{
    show:true,
    count:0,
    type:"count"
  },
  liveStreamingInfo:{
    type:"null",
    time:0,
    dueDate:new Date()
  },
  goodsName:{
    text:"상품명",
    rows:1,
    labels:["tvGoods"]
  },
  goodsPrice:{
    price:10000,
    type:"deal",
    origin:0,
    isOptions:false
  }
};

/*
export const 데이터없음 = Template.bind({});
데이터없음.args = {modifier:"storybook"};
*/