import vButtonGroup from './vButtonGroup.vue';
import vVerticalButtonGroup from './vVerticalButtonGroup.vue';

export default function install(Vue) {
  Vue.component('v-button-group', vButtonGroup);
  Vue.component('v-vertical-button-group', vVerticalButtonGroup);
}
