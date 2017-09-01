<template>
  <div>
    <h1>Buttons</h1>
    <div class="demoContainer">
      <v-button>Default</v-button>
      <v-button vStyle="primary">Primary</v-button>
      <v-button vStyle="secondary">Secondary</v-button>
      <v-button vStyle="success">Success</v-button>
      <v-button vStyle="info">Info</v-button>
      <v-button vStyle="warning">Warning</v-button>
      <v-button vStyle="danger">Danger</v-button>
      <v-button vStyle="link">Link</v-button>
    </div>

    <div class="demoContainer">
      <v-button vStyle="primary" outline>Primary</v-button>
      <v-button vStyle="secondary" outline>Secondary</v-button>
      <v-button vStyle="success" outline>Success</v-button>
      <v-button vStyle="info" outline>Info</v-button>
      <v-button vStyle="warning" outline>Warning</v-button>
      <v-button vStyle="danger" outline>Danger</v-button>
    </div>

    <div class="demoContainer">
      <v-button size='sm'>Small</v-button>
      <v-button size='md'>Middle</v-button>
      <v-button size='lg'>Large</v-button>
    </div>

    <div class="demoContainer">
      <v-button type="type" vStyle="primary" size="lg" block>Block level button</v-button>
      <v-button type="type" vStyle="secondary" size="lg" block>Block level button</v-button>
    </div>

    <div class="demoContainer">
      <v-button type="type" vStyle="primary" size="lg" disabled>Primary button</v-button>
      <v-button type="type" vStyle="secondary" size="lg" disabled>Secondary button</v-button>
    </div>
  </div>
</template>

<style scoped>
.demoContainer {
  border: 2px solid #eee;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
}
</style>
