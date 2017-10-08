<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import formRadioCheck from '../../mixins/formRadioCheck.js';

export default {
  watch: {
    checked(newVal, oldVal) {
        this.localChecked = this.checked;
    },
    localChecked(newVal, oldVal) {
        this.$emit('input', newVal);
    }
  },
  methods: {
  }
}
</script>
