<template>
  <div>
    <h1>Alerts</h1>
    <v-alert vStyle="link">
      <strong>Well done!</strong> You successfully read this important alert message.
    </v-alert>
    <v-alert vStyle="success">
      <strong>Well done!</strong> You successfully read this important alert message.
    </v-alert>
    <v-alert vStyle="info">
      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </v-alert>
    <v-alert vStyle="warning">
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </v-alert>
    <v-alert vStyle="danger">
      <strong>Oh snap!</strong> Change a few things up and try submitting again.
    </v-alert>

    <v-alert vStyle="danger" dismissible>
      <strong>Oh snap!</strong> Change a few things up and try submitting again.
    </v-alert>

    <v-alert vStyle="success" :show="showAlert">Success show alert</v-alert>
    <v-button vStyle="info" @click="showAlertClick">show alert</v-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showAlert: false
      };
    },
    methods: {
      showAlertClick() {
        this.showAlert = true;
        console.log('show alert click');
      }
    }
  };
</script>
