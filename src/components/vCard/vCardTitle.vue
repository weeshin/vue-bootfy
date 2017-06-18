<template>
  <h1 class="card-title" v-if="size === 'h1'">
    <slot></slot>
  </h1>
  <h2 class="card-title" v-else-if="size === 'h2'">
    <slot></slot>
  </h2>
  <h3 class="card-title" v-else-if="size === 'h3'">
    <slot></slot>
  </h3>
  <h4 class="card-title" v-else-if="size === 'h4'">
    <slot></slot>
  </h4>
  <h5 class="card-title" v-else-if="size === 'h5'">
    <slot></slot>
  </h5>
  <h6 class="card-title" v-else-if="size === 'h6'">
    <slot></slot>
  </h6>
  <div class="card-title" v-else>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      size: {
        type: String,
        default: null
      }
    }
  };
</script>
