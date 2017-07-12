import vForm from './vForm.vue';
import vFormCheck from './vFormCheck.vue';
import vFormGroup from './vFormGroup.vue';
import vFormInput from './vFormInput.vue';
import vFormRadio from './vFormRadio.vue';
import vFormSelect from './vFormSelect.vue';

export default function install(Vue) {
  Vue.component('v-form', vForm);
  Vue.component('v-form-check', vFormCheck);
  Vue.component('v-form-group', vFormGroup);
  Vue.component('v-form-input', vFormInput);
  Vue.component('v-form-radio', vFormRadio);
  Vue.component('v-form-select', vFormSelect);
}
