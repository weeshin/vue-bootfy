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
    },
    navbar: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formInlineClass: function() {
      const allClassnames = [];

      if (this.inline) {
        allClassnames.push('form-inline');
      }
      if (this.navbar) {
        allClassnames.push('form-inline my-2 my-lg-0');
      }
      return allClassnames;
    }
  }
};
</script>
