<template>
  <div :class="['jumbotron', fluidClassName]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    fluid: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    fluidClassName: function() {
      if (this.fluid) {
        return 'jumbotron-fluid';
      }
    }
  }
};
</script>
