<template>
  <component :is="tag" class="navbar-brand" :href="href">
    <slot></slot>
  </component>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    href: {
      type: String,
      default: null
    }
  }
};
</script>
