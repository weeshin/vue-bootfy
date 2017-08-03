<template>
  <nav :class="['navbar', 'navbar-toggleable-md bg-faded', classname]">
    <slot></slot>
  </nav>
</template>

<script>
export default {
  props: {
    inverse: {
      type: Boolean,
      default: false
    },
    fixTop: {
      type: Boolean,
      default: false
    },
    fixBottom: {
      type: Boolean,
      default: false
    },
    stickyTop: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classname: function() {
      const allClassnames = [];

      if (this.inverse) {
        allClassnames.push('navbar-inverse bg-inverse');
      } else {
        allClassnames.push('navbar-light');
      }

      if (this.fixTop) {
        allClassnames.push('fixed-top');
      } else if (this.fixBottom) {
        allClassnames.push('fixed-bottom');
      } else if (this.stickyTop) {
        allClassnames.push('sticky-top');
      }

      return allClassnames;
    }
  }
};
</script>
