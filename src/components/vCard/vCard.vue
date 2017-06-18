<template>
  <div :class="['card', className, textCenterClassName, inverseClassName]">
    <div class="card-block">
        <div class="card-title" v-if='header'>{{ header }}</div>
        <slot></slot>
    </div>

  </div>
</template>
<script>
  export default {
    props: {
      header: {
        type: String,
        default: null
      },
      textcenter: {
        type: Boolean,
        default: false
      },
      inverse: {
        type: Boolean,
        default: false
      },
      vStyle: {
        type: String,
        default: null
      }
    },
    computed: {
      className: function() {
        switch (this.vStyle) {
          case 'primary':
            return 'card-primary';
          case 'success':
            return 'card-success';
          case 'info':
            return 'card-info';
          case 'warning':
            return 'card-warning';
          case 'danger':
            return 'card-danger';
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
