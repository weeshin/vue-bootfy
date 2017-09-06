<template>
  <nav :class="['navbar', 'navbar-expand-lg', classname]">
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
      const classlist = [];

      if (this.inverse) {
        classlist.push('navbar-dark bg-dark');
      } else {
        classlist.push('navbar-light bg-light');
      }

      if (this.fixTop) {
        classlist.push('fixed-top');
      } else if (this.fixBottom) {
        classlist.push('fixed-bottom');
      } else if (this.stickyTop) {
        classlist.push('sticky-top');
      }

      switch (this.size) {
        case 'small':
          classlist.push('navbar-expand-sm');
          break;
        case 'middle':
          classlist.push('navbar-expand-md');
          break;
        case 'large':
          classlist.push('navbar-expand-lg');
          break;
        case 'extra':
          classlist.push('navbar-expand-xl');
          break;
        default:
          classlist.push('navbar-expand-lg');
      }
      // justify-content-between

      return classlist;
    }
  }
};
</script>
