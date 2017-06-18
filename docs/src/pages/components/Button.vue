<template>
  <div>
    <h1>Buttons</h1>
    <div class="demoContainer">
      <v-button>Default</v-button>
      <v-button btnStyle="primary">Primary</v-button>
      <v-button btnStyle="secondary">Secondary</v-button>
      <v-button btnStyle="success">Success</v-button>
      <v-button btnStyle="info">Info</v-button>
      <v-button btnStyle="warning">Warning</v-button>
      <v-button btnStyle="danger">Danger</v-button>
      <v-button btnStyle="link">Link</v-button>
    </div>

    <div class="demoContainer">
      <v-button btnStyle="primary" outline>Primary</v-button>
      <v-button btnStyle="secondary" outline>Secondary</v-button>
      <v-button btnStyle="success" outline>Success</v-button>
      <v-button btnStyle="info" outline>Info</v-button>
      <v-button btnStyle="warning" outline>Warning</v-button>
      <v-button btnStyle="danger" outline>Danger</v-button>
    </div>

    <div class="demoContainer">
      <v-button size='sm'>Small</v-button>
      <v-button size='md'>Middle</v-button>
      <v-button size='lg'>Large</v-button>
    </div>

    <div class="demoContainer">
      <v-button type="type" btnStyle="primary" size="lg" block>Block level button</v-button>
      <v-button type="type" btnStyle="secondary" size="lg" block>Block level button</v-button>
    </div>

    <div class="demoContainer">
      <v-button type="type" btnStyle="primary" size="lg" disabled>Primary button</v-button>
      <v-button type="type" btnStyle="secondary" size="lg" disabled>Secondary button</v-button>
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
