<template>
  <pre>
    <code ref="code-elm" :class="lang">
      <slot></slot>
    </code>
  </pre>
</template>

<script>
import hljs from 'highlight.js';
import detectIndent from 'detect-indent';
import redent from 'redent';

hljs.configure({
  tabReplace: '  ',
  languages: []
});
// hljs.initHighlighting();
// hljs.initHighlightingOnLoad();

export default {
  props: {
    lang: String,
    code: String
  },
  methods: {
    indentCode(codeContent) {
      let indent = detectIndent(codeContent).indent || '\t';

      codeContent = redent(codeContent, 0, indent);
      return codeContent.trim();
    },
    init() {
      let codeElm = this.$refs['code-elm'];

      codeElm.textContent = this.indentCode(codeElm.textContent);
      hljs.highlightBlock(codeElm);
    }
  },
  mounted() {
    this.init();
  },
  updated() {
    this.init();
  }
};
</script>
