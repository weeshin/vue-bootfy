<template>
  <li v-if="dropdown" :class="['nav-item', dropdownClassname]">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <slot></slot>
  </li>

  <li v-else :class="['nav-item']">
    <a :class="['nav-link', activeClass, disabledClass, fillClass]"
       :role="tabAttr" :data-toggle="tabAttr" @click="$emit('click')">
      <slot></slot>
    </a>
  </li>


</template>
<script>
export default {
  props: {
    dropdown: {
      type: Boolean,
      default: false
    },
    href: {
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
    fill: {
      type: Boolean,
      default: false
    },
    tab: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dropdownClassname: function() {
      if (this.downdown) {
        return 'dropdown';
      }
    },
    activeClass: function() {
      if (this.active) {
        return 'active';
      }
    },
    disabledClass: function() {
      if (this.disabled) {
        return 'disabled';
      }
    },
    fillClass: function() {
      if (this.fill) {
        return 'flex-sm-fill text-sm-center';
      }
    },
    tabAttr: function() {
      if (this.tab) {
        return 'tab';
      }
    }
  }
};
</script>
