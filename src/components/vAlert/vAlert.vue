<template>
  <div v-if="pshow" :class="['alert', className]" role="alert">
    <button v-if="dismissible" type="button" class="close" data-dismiss="alert" aria-label="Close" @click="dismiss">
      <span aria-hidden="true">&times;</span>
    </button>
    <slot></slot>
  </div>
</template>

<script>
import common from '../../mixins/common.js';

export default {
  mixins: [common],
  props: {
    dismissible: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      countDownTimerId: null,
      dismissed: false
    };
  },
  watch: {
    show() {
      this.changeShowStatus();
    }
  },
  computed: {
    className: function() {
      switch (this.vStyle) {
        case 'primary':
          return 'alert-primary';
        case 'secondary':
          return 'alert-secondary';
        case 'success':
          return 'alert-success';
        case 'info':
          return 'alert-info';
        case 'warning':
          return 'alert-warning';
        case 'danger':
          return 'alert-danger';
        case 'light':
          return 'alert-light';
        case 'dark':
          return 'alert-dark';
        default:
      }
    },
    dismissibleClassName: function() {
      if (this.dismissible) {
        return 'alert-dismissible fade show';
      }
    },
    pshow() {
      return !this.dismissed && (this.countDownTimerId || this.show);
    }
  },
  methods: {
    dismiss() {
      this.dismissed = true;
      this.$emit('dismissed-callback');
    },
    changeShowStatus() {
      this.dismissed = false;
      if (this.show === true || this.show === false || this.show === null || this.show === 0) {
        return;
      }
    }
  }
};
</script>
