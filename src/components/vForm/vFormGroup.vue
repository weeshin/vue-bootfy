<template>
  <div v-if="srOnly">
    <slot></slot>
  </div>
  <div v-else :class="['form-group', feedbackStatusClass, rowClass]">
    <slot></slot>
  </div>
</template>

<script>
import form from '../../mixins/form.js';

export default {
  mixins: [form]
};
</script>
