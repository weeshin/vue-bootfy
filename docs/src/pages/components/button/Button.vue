<template>
  <div>
    <h1>Buttons</h1>
    <example-container>
      <v-button vStyle="primary">Primary</v-button>
      <v-button vStyle="secondary">Secondary</v-button>
      <v-button vStyle="success">Success</v-button>
      <v-button vStyle="danger">Danger</v-button>
      <v-button vStyle="warning">Warning</v-button>
      <v-button vStyle="info">Info</v-button>
      <v-button vStyle="light">Light</v-button>
      <v-button vStyle="dark">Dark</v-button>
      <v-button vStyle="link">Link</v-button>
      <v-code>
        <script type="text/plain">
        <v-button vStyle="primary">Primary</v-button>
        <v-button vStyle="secondary">Secondary</v-button>
        <v-button vStyle="success">Success</v-button>
        <v-button vStyle="danger">Danger</v-button>
        <v-button vStyle="warning">Warning</v-button>
        <v-button vStyle="info">Info</v-button>
        <v-button vStyle="light">Light</v-button>
        <v-button vStyle="dark">Dark</v-button>
        <v-button vStyle="link">Link</v-button>
        </script>
      </v-code>
    </example-container>

    <example-container>
      <v-button vStyle="primary" outline>Primary</v-button>
      <v-button vStyle="secondary" outline>Secondary</v-button>
      <v-button vStyle="success" outline>Success</v-button>
      <v-button vStyle="danger" outline>Danger</v-button>
      <v-button vStyle="warning" outline>Warning</v-button>
      <v-button vStyle="info" outline>Info</v-button>
      <v-button vStyle="light" outline>Light</v-button>
      <v-button vStyle="dark" outline>Dark</v-button>
      <v-code>
        <script type="text/plain">
        <v-button vStyle="primary" outline>Primary</v-button>
        <v-button vStyle="secondary" outline>Secondary</v-button>
        <v-button vStyle="success" outline>Success</v-button>
        <v-button vStyle="danger" outline>Danger</v-button>
        <v-button vStyle="warning" outline>Warning</v-button>
        <v-button vStyle="info" outline>Info</v-button>
        <v-button vStyle="light" outline>Light</v-button>
        <v-button vStyle="dark" outline>Dark</v-button>
        </script>
      </v-code>
    </example-container>

    <h1>Sizes</h1>
    <example-container>
      <v-button size='sm'>Small</v-button>
      <v-button size='md'>Middle</v-button>
      <v-button size='lg'>Large</v-button>
      <v-code>
        <script type="text/plain">
        <v-button size='sm'>Small</v-button>
        <v-button size='md'>Middle</v-button>
        <v-button size='lg'>Large</v-button>
        </script>
      </v-code>
    </example-container>

    <h1>Block level buttons</h1>
    <example-container>
      <v-button type="type" vStyle="primary" size="lg" block>Block level button</v-button>
      <v-button type="type" vStyle="secondary" size="lg" block>Block level button</v-button>
      <v-code>
        <script type="text/plain">
        <v-button type="type" vStyle="primary" size="lg" block>Block level button</v-button>
        <v-button type="type" vStyle="secondary" size="lg" block>Block level button</v-button>
        </script>
      </v-code>
    </example-container>

    <example-container>
      <v-button type="type" vStyle="primary" size="lg" disabled>Primary button</v-button>
      <v-button type="type" vStyle="secondary" size="lg" disabled>Secondary button</v-button>
      <v-code>
        <script type="text/plain">
        <v-button type="type" vStyle="primary" size="lg" disabled>Primary button</v-button>
        <v-button type="type" vStyle="secondary" size="lg" disabled>Secondary button</v-button>
        </script>
      </v-code>
    </example-container>

    <example-container>
      <div v-markdown="{content: buttonMd}"></div>
    </example-container>
  </div>
</template>
<script>
import exampleContainer from '../../../components/ExampleContainer.vue';
import ButtonMd from './Button.md';

export default {
  components: {
    'example-container': exampleContainer
  },
  data() {
    return {
      buttonMd: ButtonMd
    }
  }
}
</script>
