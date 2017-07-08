<template>
  <v-form-group>
    <label :for="id">{{ label }}</label>
    <textarea v-if="textarea" class="form-control" :id="id" :rows="rows"></textarea>

    <input v-else :type="type" class="form-control" :id="id" :aria-describedby="helpId" :placeholder="placeholder">

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
