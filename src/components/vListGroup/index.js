import vListGroup from './vListGroup.vue';
import vListGroupItem from './vListGroupItem.vue';

export default function install(Vue) {
  Vue.component('v-list-group', vListGroup);
  Vue.component('v-list-group-item', vListGroupItem);
}
