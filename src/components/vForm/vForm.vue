<template>
  <form :class="[formInlineClass]">
    <slot></slot>
  </form>
</template>

<script>


export default {
  props: {
    inline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formInlineClass: function() {
      if (this.inline) {
        return 'form-inline';
      }
    }
  }
};
</script>
