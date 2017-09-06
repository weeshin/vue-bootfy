import vAlert from './vAlert.vue';
import vAlertLink from './vAlertLink.vue';

export default function install(Vue) {
  Vue.component('v-alert', vAlert);
  Vue.component('v-alert-link', vAlertLink);
}
