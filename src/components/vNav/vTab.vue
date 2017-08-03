<template>
  <v-tab-pane fade :show="show">
    <slot></slot>
  </v-tab-pane>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      show: false,
      active: false
    };
  }
};
</script>
