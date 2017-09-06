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
    escapeHtml(unsafe) {
      return unsafe
             .replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;')
             .replace(/"/g, '&quot;')
             .replace(/'/g, '&#039;');
    },
    indentCode(codeContent) {
      let indent = detectIndent(codeContent).indent || '\t';

      codeContent = redent(codeContent, 0, indent);
      return codeContent.trim();
    },
    init() {
      let codeElm = this.$refs['code-elm'];

      codeElm.innerHTML = this.indentCode(codeElm.innerHTML);
      codeElm.innerHTML = this.escapeHtml(codeElm.innerHTML);

      console.log('element', codeElm);

      // codeElm.textContent = this.indentCode(codeElm.textContent);

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
