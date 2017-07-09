<template>
  <div :class="['form-group', feedbackStatusClass]">
    <slot></slot>
  </div>
</template>

<script>
import form from '../../mixins/form.js';

export default {
  mixins: [form]
};
</script>
