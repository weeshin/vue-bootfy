<template>
  <button :class="['navbar-toggler', classnames]" type="button"
    data-toggle="collapse"
    data-target="#navbarToggleExternalContent"
    aria-controls="navbarToggleExternalContent"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</template>

<script>
export default {
  props: {
    right: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classnames: function() {
      const classlist = [];

      if (this.right) {
        classlist.push('navbar-toggler-right');
      } else if (this.left) {
        classlist.push('navbar-toggler-left');
      }
      return classlist;
    }
  }
};
</script>
