<template>
  <span :class="['badge', className, pillClass]">
    <slot></slot>
  </span>
</template>

<script>
import common from '../../mixins/common.js';

export default {
  mixins: [common],
  props: {
    pill: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className: function() {
      switch (this.vStyle) {
        case 'primary':
          return 'badge-primary';
        case 'secondary':
          return 'badge-secondary';
        case 'success':
          return 'badge-success';
        case 'danger':
          return 'badge-danger';
        case 'warning':
          return 'badge-warning';
        case 'info':
          return 'badge-info';
        case 'light':
          return 'badge-light';
        case 'dark':
          return 'badge-dark';

      }
    },
    pillClass: function() {
      return this.pill ? 'badge-pill' : null;
    }

  }
};
</script>

<style scoped>
/*.badge {
  padding: 0.55em 0.4em;
  border-radius: 0.35rem;
}*/
</style>
