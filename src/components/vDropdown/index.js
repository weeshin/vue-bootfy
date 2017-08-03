import vDropdown from './vDropdown.vue';
import vDropdownDivider from './vDropdownDivider.vue';
import vDropdownItem from './vDropdownItem.vue';
import vDropdownMenu from './vDropdownMenu.vue';

export default function install(Vue) {
  Vue.component('v-dropdown', vDropdown);
  Vue.component('v-dropdown-divider', vDropdownDivider);
  Vue.component('v-dropdown-item', vDropdownItem);
  Vue.component('v-dropdown-menu', vDropdownMenu);
}
