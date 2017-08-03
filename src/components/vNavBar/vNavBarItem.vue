<template>
  <li :class="['nav-item', activeClass, dropdownClass, showClass]">
    <a :class="['nav-link', disabledClass, dropdownToggleClass]"
       :id="id" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
       @click="linkClick">
      <slot></slot>
    </a>
    <slot name="menu"></slot>
  </li>
</template>
<script>
export default {
  props: {
    id: {
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
    dropdown: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    activeClass: function() {
      const allClassnames = [];

      if (this.active) {
        allClassnames.push('active');
      }

      return allClassnames;
    },
    disabledClass: function() {
      if (this.disabled) {
        return 'disabled';
      }
    },
    dropdownClass: function() {
      if (this.dropdown) {
        return 'dropdown';
      }
    },
    dropdownToggleClass: function() {
      if (this.dropdown) {
        return 'dropdown-toggle';
      }
    },
    showClass: function() {
      if (this.show) {
        return 'show';
      }
    }
  },
  methods: {
    linkClick: function() {
      this.show = !this.show;
      console.log('link click');
    }
  }
};
</script>
