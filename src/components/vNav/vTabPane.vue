<template>
  <div class="tab-pane" :id="id" :class="[fadeClass, showClass]" role="tabpanel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null
    },
    fade: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    fadeClass: function() {
      if (this.fade) {
        return 'fade';
      }
    },
    showClass: function() {
      if (this.show) {
        return 'show active';
      }
    }
  }
};
</script>
