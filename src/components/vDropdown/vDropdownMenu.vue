<template>
  <div :class="['dropdown-menu']" :aria-labelledby="id">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: null
    }
  }
};
</script>
