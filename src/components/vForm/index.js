import vFormGroup from './vFormGroup.vue';
import vFormInput from './vFormInput.vue';
import vFormRadio from './vFormRadio.vue';
import vFormRadioItem from './vFormRadioItem.vue';
import vFormSelect from './vFormSelect.vue';

export default function install(Vue) {
  Vue.component('v-form-group', vFormGroup);
  Vue.component('v-form-input', vFormInput);
  Vue.component('v-form-radio', vFormRadio);
  Vue.component('v-form-radio-item', vFormRadioItem);
  Vue.component('v-form-select', vFormSelect);
}
