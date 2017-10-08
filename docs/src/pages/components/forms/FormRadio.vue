<template>
  <div>
    <example-container title="Checkbox">
    </example-container>
    <example-container title="Radio">
      <v-form-radio-group @change="change" v-model="selected">
        <v-form-radio name="radioOption" value="male" checked inline>Male</v-form-radio>
        <v-form-radio name="radioOption" value="female" inline>Female</v-form-radio>
      </v-form-radio-group>
      <div>Selected: {{ selected }}</div>
    </example-container>
  </div>
</template>

<script>
import exampleContainer from '../../../components/ExampleContainer.vue';

export default {
  components: {
    'example-container': exampleContainer
  },
  data() {
    return {
      selected: 'Not yet selected'
    }
  },
  methods: {
    change(value) {
      console.log('example change ', value);
    }
  }
}
</script>
