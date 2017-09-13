<template>
  <div :class="['card', className, textCenterClassName, inverseClassName]">
    <slot></slot>
  </div>
</template>
<script>
import common from '../../mixins/common.js';

export default {
  mixins: [common],
  props: {
    textcenter: {
      type: Boolean,
      default: false
    },
    inverse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className: function() {
      switch (this.vStyle) {
        case 'primary':
          return 'bg-primary text-white';
        case 'secondary':
          return 'bg-secondary text-white';
        case 'success':
          return 'bg-success text-white';
        case 'danger':
          return 'bg-danger text-white';
        case 'warning':
          return 'bg-warning text-white';
        case 'info':
          return 'bg-info text-white';
        case 'light':
          return 'bg-light';
        case 'warning':
          return 'bg-dark text-white';
        default:
          return null;
      }
    },
    textCenterClassName: function() {
      if (this.textcenter) {
        return 'text-center';
      }
    },
    inverseClassName: function() {
      return this.inverse ? 'card-inverse' : null;
    }

  }
};
</script>
