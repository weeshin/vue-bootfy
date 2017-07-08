import vDropdown from './vDropdown.vue';
import vDropdownDivider from './vDropdownDivider.vue';
import vDropdownItem from './vDropdownItem.vue';

export default function install(Vue) {
  Vue.component('v-dropdown', vDropdown);
  Vue.component('v-dropdown-divider', vDropdownDivider);
  Vue.component('v-dropdown-item', vDropdownItem);
}
