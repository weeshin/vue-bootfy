<template>
  <div>
    <h1>Dropdown</h1>

    <div class="row">
      <div class="col">
        <v-dropdown title="Dropdown menu lo" :items="items" vStyle="primary" split></v-dropdown>
      </div>
      <div class="col">
        <v-dropdown title="Dropdown menu lo" :items="items" vStyle="secondary" split></v-dropdown>
      </div>
      <div class="col">
        <v-dropdown title="Dropdown menu lo" :items="items" vStyle="success" split></v-dropdown>
      </div>
      <div class="col">
        <v-dropdown title="Dropdown menu lo" :items="items" vStyle="info" split></v-dropdown>
      </div>
      <div class="col">
        <v-dropdown title="Dropdown menu lo" :items="items" vStyle="warning" split></v-dropdown>
      </div>
      <div class="col">
        <v-dropdown title="Dropdown menu lo" :items="items" vStyle="danger" split></v-dropdown>
      </div>
    </div>
    <br>
    <div class="row">
      <v-dropdown title="Dropdown menu lo" :items="items" vStyle="primary"></v-dropdown>
      <v-dropdown title="Dropdown menu lo" :items="items" vStyle="secondary"></v-dropdown>
      <v-dropdown title="Dropdown menu lo" :items="items" vStyle="success"></v-dropdown>
      <v-dropdown title="Dropdown menu lo" :items="items" vStyle="info"></v-dropdown>
      <v-dropdown title="Dropdown menu lo" :items="items" vStyle="warning"></v-dropdown>
      <v-dropdown title="Dropdown menu lo" :items="items" vStyle="danger"></v-dropdown>
    </div>

    <br>

    <div class="row">
      <v-dropdown title="Dropdown menu lo" :items="items" vStyle="secondary" size="lg"></v-dropdown>
      <v-dropdown title="Dropdown menu lo" :items="items" vStyle="secondary" size="lg" split></v-dropdown>
    </div>

    <br>

    <div class="row">
      <v-dropdown title="Dropdown menu lo" :items="items" vStyle="secondary" size="sm"></v-dropdown>
      <v-dropdown title="Dropdown menu lo" :items="items" vStyle="secondary" size="sm" split></v-dropdown>
    </div>

    <br>

    <div class="row">
      <v-dropdown title="Dropdown menu lo" :items="items" vStyle="secondary" size="lg" up></v-dropdown>
      <v-dropdown title="Dropdown menu lo" :items="items" vStyle="secondary" size="lg" split up></v-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {id: '1', name: 'Action1'},
          {id: '2', name: 'Action2'}
        ]
      };
    }
  };
</script>
