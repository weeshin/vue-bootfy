<template>
  <a v-if="anchor" :class="['list-group-item', vStyleClassname, activeClassname, disabledClassname, hoverClassname, justifyClassname]">
    <slot></slot>
  </a>
  <button v-else-if="button" :class="['list-group-item', vStyleClassname, activeClassname, disabledClassname, hoverClassname, justifyClassname]">
    <slot></slot>
  </button>
  <li v-else :class="['list-group-item', vStyleClassname, activeClassname, disabledClassname, hoverClassname, justifyClassname]">
    <slot></slot>
  </li>
</template>
<script>
export default {
  props: {
    vStyle: {
      type: String,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    justify: {
      type: Boolean,
      default: false
    },
    anchor: {
      type: Boolean,
      default: false
    },
    button: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    vStyleClassname: function() {
      switch (this.vStyle) {
        case 'success':
          return 'list-group-item-success';
        case 'info':
          return 'list-group-item-info';
        case 'warning':
          return 'list-group-item-warning';
        case 'danger':
          return 'list-group-item-danger';
        default:
      }
    },
    activeClassname: function() {
      if (this.active) {
        return 'active';
      }
    },
    disabledClassname: function() {
      if (this.disabled) {
        return 'disabled';
      }
    },
    hoverClassname: function() {
      if (this.hover) {
        return 'list-group-item-action';
      }
    },
    justifyClassname: function() {
      if (this.justify) {
        return 'justify-content-between';
      }
    }
  }
};
</script>
