import vInputGroup from './vInputGroup.vue';
import vInputGroupBtn from './vInputGroupBtn.vue';

export default function install(Vue) {
  Vue.component('v-input-group', vInputGroup);
  Vue.component('v-input-group-btn', vInputGroupBtn);
}
