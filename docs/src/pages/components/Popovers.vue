<template>
  <div>
    <h1>Popovers</h1>
    <example-container>
      <h2>Toggle</h2>
      <v-popover v-for="(placement, index) in ['top', 'left', 'right', 'bottom']"
        :placement="placement" content="Heya!" key="index">
        <v-button btnStyle="primary">{{ placement }}</v-button>
      </v-popover>

    </example-container>

    <example-container>
      <h2>Hover</h2>
      <v-popover v-for="(placement, index) in ['top', 'left', 'right', 'bottom']"
        :placement="placement" content="Heya!" key="index" hover>
        <v-button btnStyle="primary">{{ placement }}</v-button>
      </v-popover>

    </example-container>

    <example-container>
      <h2>dismissible</h2>
      <v-popover content="Heya!" dismissible>
        <v-button btnStyle="primary">Dismissible popover</v-button>
      </v-popover>

    </example-container>
  </div>
</template>
<script>
import exampleContainer from '../../components/ExampleContainer.vue';

export default {
  components: {
    'example-container': exampleContainer
  },
  methods: {
    doDoo() {
      console.log('doDoo');
    }
  }
};
</script>
