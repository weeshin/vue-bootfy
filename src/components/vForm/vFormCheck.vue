<template>
  <div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" class="form-check-input">
      {{ label }}
    </label>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: null
    }
  }
};
</script>
