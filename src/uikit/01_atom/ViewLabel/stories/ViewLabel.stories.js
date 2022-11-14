import '../../../00_base/reset.scss';
import {createType} from "../../../../../.storybook/createType.js";
import ViewLabel from "../ViewLabel.vue";

export default { 
  title: 'UIKIT/Atom/ViewLabel',
  component: ViewLabel,
  argTypes:{
    count:createType("VOD 시청횟수표시","number")
  }
}

const Template = (args) => ({
  components: { ViewLabel },
  setup() {
    return { args };
  },
  template: '<view-label v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
  count:0
};