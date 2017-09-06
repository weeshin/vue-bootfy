<template>
  <a :href="href" class="alert-link">
    <slot></slot>
  </a>
</template>
<script>
export default {
  props: {
    href: null
  }
};
</script>
