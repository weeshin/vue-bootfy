<template>
  <v-form-group :feedback="feedback">
    <label v-if="label" :for="id">{{ label }}</label>

    <textarea v-if="textarea" class="form-control" :id="id" :rows="rows"
      v-bind:readonly="readonly"></textarea>
    <input v-else :type="type" :class="['form-control', controlGroupSizeClass, feedbackControlClass]" :id="id" :aria-describedby="helpId" :placeholder="placeholder"
      v-bind:readonly="readonly">

    <div v-if="feedback" class="form-control-feedback">{{ feedback.message }}</div>
    <small v-if="description" :id="helpId" class="form-text text-muted">{{ description }}</small>
  </v-form-group>
</template>

<script>
import form from '../../mixins/form.js';
import vFormGroup from './vFormGroup.vue';

export default {
  mixins: [form],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    textarea: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 5
    },
    readonly: {
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
