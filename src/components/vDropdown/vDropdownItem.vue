<template>
  <button class="dropdown-item" type="button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>
