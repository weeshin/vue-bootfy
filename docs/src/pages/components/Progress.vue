<template>
  <div>
    <v-progress ref="progress1" :now="now" :min="0" :max="max" :height="30"></v-progress>
    <br>
    <v-progress ref="progress2" :now="now" :min="0" :max="max" vStyle="success" :interval="900"></v-progress>
    <br>
    <v-progress ref="progress3" :now="now" :min="0" :max="max" vStyle="info" :interval="300" stripe></v-progress>
    <br>
    <v-progress ref="progress4" :now="now" :min="0" :max="max" vStyle="warning" :interval="100" stripe animate></v-progress>
    <br>
    <v-progress ref="progress5" :now="now" :min="0" :max="max" vStyle="danger" :interval="50" stripe animate></v-progress>
    <br>
    <v-button btnStyle="primary" @click="startProcess">Click Me</v-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      now: 0,
      max: 100
    };
  },
  watch: {
  },
  methods: {
    startProcess() {
      this.$refs.progress1.start();
      this.$refs.progress2.start();
      this.$refs.progress3.start();
      this.$refs.progress4.start();
      this.$refs.progress5.start();
    }
  }
};
</script>
