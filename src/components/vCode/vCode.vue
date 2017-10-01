<template>
  <pre :class="{'line-numbers': lineNumbers}" :data-line="dataLine"><code ref="code" :class="lang"><slot></slot></code></pre>
</template>

<script>

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
    },
    dataLine: {
      type: String,
      default: null
    }
  }
};
</script>
