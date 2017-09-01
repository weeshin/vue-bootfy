import vCol from './vCol.vue';
import vRow from './vRow.vue';

export default function install(Vue) {
  Vue.component('v-col', vCol);
  Vue.component('v-row', vRow);
}
