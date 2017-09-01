import vCode from './vCode.vue';
import vBlockCode from './vBlockCode.vue';


export default function install(Vue) {
  Vue.component('v-code', vCode);
  Vue.component('v-block-code', vBlockCode);
}
