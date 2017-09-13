<template>
  <img :class="classlist">
</template>
<script>
export default {
  props: {
    top: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classlist() {
      const classlist = [];
      if(this.top) {
        classlist.push('card-img-top');
      }
      else if(this.bottom) {
        classlist.push('card-img-bottom');
      }
      else if(this.overlay) {
        classlist.push('card-img-overlay');
      } else {
        classlist.push('card-img');
      }
    }
  }
}
</script>
