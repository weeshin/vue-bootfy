<template>
  <div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" class="form-check-input"
        :checked="checked"
        @change="change">
      {{ label }}
    </label>
  </div>
</template>
<script>
import radioMixin from '../../mixins/formRadioCheck.js';

export default {
  mixins: [radioMixin],
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checked: this.value
    }
  },
  methods: {
    change: function() {
        this.checked = !this.checked;
        this.$emit('input', this.checked);
    }
  }
};
</script>
