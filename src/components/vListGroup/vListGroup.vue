<template>
  <ul v-if="ul" class="list-group">
    <slot></slot>
  </ul>
  <div v-else class="list-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    ul: {
      type: Boolean,
      default: false
    }
  }
};
</script>
