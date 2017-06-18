<template>
  <ol class="breadcrumb" >
    <li class="breadcrumb-item" :class="{ active: (index === items.length-1) }" v-for="(item, index) in items" >
      <a v-if="index !== items.length-1" :href="item.href">
        {{ item.text }}
      </a>
      <span v-else>{{ item.text }}</span>
    </li>
  </ol>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: null
      }
    }
  };
</script>
