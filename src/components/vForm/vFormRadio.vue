<template>
  <fieldset class="form-group">
    <legend>{{ label }}</legend>
    <div :class="['form-check', disabledClassname(item.disabled)]" v-for="item in items">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optionsRadios" :id="item.id" :value="item.value" v-bind:checked="item.checked" v-bind:disabled="item.disabled">
        {{ item.label }}
      </label>
    </div>
  </fieldset>
</template>

<script>
import form from '../../mixins/form.js';

export default {
  mixins: [form],
  props: {
    items: {
      type: Array
    }
  },
  methods: {
    disabledClassname: function(disabled) {
      if (disabled) {
        return 'disabled';
      }
    }
  }
};
</script>
