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
      const allClassnames = [];

      if (this.right) {
        allClassnames.push('navbar-toggler-right');
      } else if (this.left) {
        allClassnames.push('navbar-toggler-left');
      }
      return allClassnames;
    }
  }
};
</script>
