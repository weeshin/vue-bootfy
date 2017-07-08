<template>
  <div class="form-check">
    <label class="form-check-label">
      <input type="radio" class="form-check-input" :name="name" :id="id" :value="value" :checked="checked">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    checked: {
      type: Boolean
    }
  }
};
</script>
