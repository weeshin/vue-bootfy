<template>

  <div ref="content" v-html="input">
    <slot></slot>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  data() {
    return {
      input: '<h2>Hello</h2>'
    }
  },
  methods:{
    test(text) {
      var text = marked(text);
      return text;
    }
  },
  mounted() {
    var v = this.$refs.content.innerHTML;
    console.log(v);
    var result = this.test(v);
    console.log(result);
    this.$refs.content.innerHTML = result;
    // var v = this.$slots.default[0].text;
    // var result = this.test(v);
    // console.log("result", result);
    // this.$slots.default[0].text = result;
    // this.input = result;
    // console.log("slot", this.$slots.default[0]);
  }
};
</script>
