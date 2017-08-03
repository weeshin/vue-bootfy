<template>
  <div>
    <h1>Modal</h1>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" @click="showModal">Modal</button>
    <v-button btnStyle="info" @click="showModal">show modal</v-button>
    <v-modal ref="myM">
      <h1 slot="modal-header">This is title</h1>
      <p slot="modal-body">this is body</p>
    </v-modal>
  </div>
</template>

<script>
  export default {
    methods: {
      showModal() {
        console.log('showModal');
        this.$refs.myM.show();
      }
    }
  };
</script>
