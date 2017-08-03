import vNavBar from './vNavBar.vue';
import vNavBarBrand from './vNavBarBrand.vue';
import vNavBarItem from './vNavBarItem.vue';
import vNavBarTogglerButton from './vNavBarTogglerButton.vue';

export default function install(Vue) {
  Vue.component('v-nav-bar', vNavBar);
  Vue.component('v-nav-bar-brand', vNavBarBrand);
  Vue.component('v-nav-bar-item', vNavBarItem);
  Vue.component('v-nav-bar-toggler-button', vNavBarTogglerButton);
}
