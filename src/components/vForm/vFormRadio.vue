<template>

  <div :class="['form-check', inlineClassname]">
    <label class="form-check-label" @click="handleClick">
      <input :id="id"
             :value="value"
             :name="name"
             type="radio"
             class="form-check-input"
             autocomplete="off"
             :checked="checked"
             @click="handleClick"
             @change="handleChange">
      <slot></slot>
    </label>
  </div>

</template>

<script>
import radioMixin from '../../mixins/formRadioCheck.js';

export default {
  mixins: [radioMixin],
  props: {
    name: {
      type: String,
      default: null
    },
    inline: {
      type: Boolean,
      default: null
    }
  },
  data() {
    return {
      inputValue: this.value
    }
  },
  computed: {
    inlineClassname() {
      if(this.inline) {
        return 'form-check-inline';
      }
    }
  },
  methods: {
    disabledClassname: function(disabled) {
      if (disabled) {
        return 'disabled';
      }
    },
    handleClick: {

    },
    handleChange: function() {
      console.log(this.inputValue);
      this.$emit('change', this.inputValue);
      this.$parent.$emit('change', this.inputValue);
      this.$parent.$emit('input', this.inputValue);
    }
  }
};
</script>
