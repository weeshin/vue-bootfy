<template>
  <div>
    <h1>Scrollspy</h1>
    <div v-scrollspy="onScroll1">
    </div>

    <div id="scroll-target" v-scrollspy="{
            target: '#scroll-target',
            callback: this.onScroll1
          }"
      style="width: 200px; height: 100px; overflow-y: scroll;">
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      color: '#eeffee'
    };
  },
  methods: {
    onScroll1() {
      console.log('scrollCallback');
    }
  }
};
</script>
