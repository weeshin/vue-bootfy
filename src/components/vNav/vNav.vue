<template>
  <ul v-if="navbar" class="navbar-nav mr-auto">
    <slot></slot>
  </ul>

  <ul v-else :class="['nav', classnames]"
      :role="[rolelist]">
    <slot></slot>
  </ul>
</template>
<script>
export default {
  props: {
    navbar: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    end: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    tabs: {
      type: Boolean,
      default: false
    },
    pills: {
      type: Boolean,
      default: false
    },
    fill: {
      type: Boolean,
      default: false
    },
    justified: {
      type: Boolean,
      default: false
    },
    row: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classnames: function() {
      const allClassnames = [];

      if (this.center) {
        allClassnames.push('justify-content-center');
      }
      if (this.end) {
        allClassnames.push('justify-content-end');
      }
      if (this.vertical) {
        return 'flex-column flex-sm-column';
      }
      if (this.rowClassname) {
        return 'flex-sm-row';
      }
      if (this.tabs) {
        return 'nav-tabs';
      }
      if (this.pills) {
        return 'nav-pills';
      }
      if (this.fill) {
        return 'nav-fill';
      }
      if (this.justified) {
        return 'nav-justified';
      }
    },
    rolelist: function() {
      if (this.tab) {
        return 'tablist';
      }
    }
  }
};
</script>
