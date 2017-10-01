<template>
  <v-form-group :feedback="feedback" :row="row" :srOnly="srOnly">
    <label v-if="label" :for="id" :class="[colLeftClass]">{{ label }}</label>

    <textarea v-if="textarea" class="form-control" :id="id" :rows="rows"
      v-bind:readonly="readonly"></textarea>

    <div v-else :class="[colRightClass]">
      <input :type="type" :class="[formControlClass, controlGroupSizeClass, feedbackControlClass]"
             :id="id"
             :aria-describedby="helpId"
             :placeholder="placeholder"
             :value="value"
             v-bind:readonly="readonly"
             @input="$emit('input', $event.target.value)"
             >
    </div>

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
    },
    value: {
      type: String,
      default: null
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
    },
    formControlClass: function() {
      if (this.srOnly) {
        return 'form-control mb-2 mr-sm-2 mb-sm-0';
      }
      return 'form-control';
    }
  }
};
</script>
