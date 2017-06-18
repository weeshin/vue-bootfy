<template>
  <div :class="[typeClass, spaceClass, justifyContentBetweenClass, sizeClass]" :role="role" :aria-label="label">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: null
      },
      role: {
        type: String,
        default: null
      },
      toolbar: {
        type: Boolean,
        default: false
      },
      space: {
        type: Boolean,
        default: false
      },
      justify: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: null
      }
    },
    computed: {
      typeClass: function() {
        return this.toolbar ? 'btn-toolbar' : 'btn-group';
      },
      spaceClass: function() {
        return this.space ? 'mr-2' : null;
      },
      justifyContentBetweenClass: function() {
        return this.justify ? 'justify-content-between' : null;
      },
      sizeClass: function() {
        switch (this.size) {
          case 'large':
            return 'btn-group-lg';
          case 'small':
            return 'btn-group-sm';
          default:
        }
      }
    }
  };
</script>
