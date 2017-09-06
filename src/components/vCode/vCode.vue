<template>
  <pre :class="{'line-numbers': lineNumbers}" data-line="1-2,4" data-start="1">
    <code ref="code" :class="lang">
      <slot></slot>
    </code>
  </pre>
</template>

<script>
import Prism from 'prismjs';

export default {
  name: 'v-code',
  props: {
    lang: {
      type: String,
      default: 'language-markup'
    },
    lineNumbers: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
