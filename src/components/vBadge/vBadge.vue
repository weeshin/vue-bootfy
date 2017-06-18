<template>
  <span :class="['badge', className, pillClass]">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    props: {
      vStyle: {
        type: String,
        default: null
      },
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
          case 'success':
            return 'badge-success';
          case 'info':
            return 'badge-info';
          case 'warning':
            return 'badge-warning';
          case 'danger':
            return 'badge-danger';
          default:
            return 'badge-default';

        }
      },
      pillClass: function() {
        return this.pill ? 'badge-pill' : null;
      }

    }
  };
</script>

<style scoped>
.badge {
  padding: 0.55em 0.4em;
  border-radius: 0.35rem;
}
</style>
