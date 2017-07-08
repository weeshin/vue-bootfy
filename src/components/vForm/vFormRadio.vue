<template>
  <fieldset class="form-group">
    <legend>{{ label }}</legend>
    <slot></slot>
  </fieldset>
</template>

<script>
import form from '../../mixins/form.js';

export default {
  mixins: [form]
};
</script>
