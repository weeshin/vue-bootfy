<template>
  <div>
    <h2 v-if="title">{{ title }}</h2>
    <div class="exampleContainer">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    default: null
  }
}
</script>

<style scoped>
.exampleContainer {
  margin: 5px;
  padding: 25px;
  border: 2px solid #eee;
}
</style>
