import vNav from './vNav.vue';
import vNavItem from './vNavItem.vue';
// import vNavLink from './vNavLink.vue';
import vPlays from './vPlays.vue';
import vTab from './vTab.vue';
import vTabContent from './vTabContent.vue';
import vTabPane from './vTabPane.vue';
import vTabs from './vTabs.vue';

export default function install(Vue) {
  Vue.component('v-nav', vNav);
  Vue.component('v-nav-item', vNavItem);
  // Vue.component('v-nav-link', vNavLink);
  Vue.component('v-plays', vPlays);
  Vue.component('v-tab', vTab);
  Vue.component('v-tab-content', vTabContent);
  Vue.component('v-tab-pane', vTabPane);
  Vue.component('v-tabs', vTabs);
}
