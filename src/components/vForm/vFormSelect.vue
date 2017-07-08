<template>
  <v-form-group>
    <label :for="id">{{ label }}</label>
    <select class="form-control" :id="id" :multiple="multiple">
      <slot></slot>
    </select>
  </v-form-group>
</template>

<script>
import form from '../../mixins/form.js';
import vFormGroup from './vFormGroup.vue';

export default {
  mixins: [form],
  props: {
    multiple: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'v-form-group': vFormGroup
  },
  computed: {
    helpId: function() {
      if (this.id) {
        return this.id + 'Help';
      }
    }
  }
};
</script>
