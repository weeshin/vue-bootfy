<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: Number,
      default: 1
    }
  },
  computed: {
    className: function() {
      let classlist = ['col'];

      classlist.push('col-' + this.size);
      return classlist;
    }
  }
};
</script>
