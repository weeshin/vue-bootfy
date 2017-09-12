<template>
  <button :class="['btn', className, sizeClassName, blockClassName]"
      @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
import common from '../../mixins/common.js';

export default {
  mixins: [common],
  props: {
    size: {
      type: String,
      default: null
    },
    block: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      defaul: false
    }
  },
  computed: {
    className: function() {
      switch (this.vStyle) {
        case 'primary':
          return this.outline ? 'btn-outline-primary' : 'btn-primary';
        case 'secondary':
          return this.outline ? 'btn-outline-secondary' : 'btn-secondary';
        case 'success':
          return this.outline ? 'btn-outline-success' : 'btn-success';
        case 'info':
          return this.outline ? 'btn-outline-info' : 'btn-info';
        case 'warning':
          return this.outline ? 'btn-outline-warning' : 'btn-warning';
        case 'danger':
          return this.outline ? 'btn-outline-danger' : 'btn-danger';
        case 'light':
          return this.outline ? 'btn-outline-light' : 'btn-light';
        case 'dark':
          return this.outline ? 'btn-outline-dark' : 'btn-dark';
        case 'link':
          return 'btn-link';
        default:        
          return this.outline ? 'btn-outline-primary' : 'btn-primary';
      }
    },
    sizeClassName: function() {
      if (this.size === 'sm') {
        return 'btn-sm';
      }
      if (this.size === 'md') {
        return 'btn-md';
      }
      if (this.size === 'lg') {
        return 'btn-lg';
      }
    },
    blockClassName: function() {
      if (this.block) {
        return 'btn-block';
      }
    }
  },
  methods: {
    onClick(e) {
      this.$emit('click', e);
    }
  }
};
</script>
