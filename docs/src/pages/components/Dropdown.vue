<template>
  <div>
    <h1>Dropdown</h1>
    <v-dropdown title="Dropdown menu lo" :items="items" vStyle="primary" split></v-dropdown>
    <v-dropdown title="Dropdown menu lo" :items="items" vStyle="secondary"></v-dropdown>
    <v-dropdown title="Dropdown menu lo" :items="items" vStyle="success"></v-dropdown>
    <v-dropdown title="Dropdown menu lo" :items="items" vStyle="info"></v-dropdown>
    <v-dropdown title="Dropdown menu lo" :items="items" vStyle="warning"></v-dropdown>
    <v-dropdown title="Dropdown menu lo" :items="items" vStyle="danger"></v-dropdown>


    <v-dropdown title="Dropdown menu lo" :items="items" vStyle="primary" size="lg"></v-dropdown>
    <v-dropdown title="Dropdown menu lo" :items="items" vStyle="primary" size="md"></v-dropdown>
    <v-dropdown title="Dropdown menu lo" :items="items" vStyle="primary" size="sm"></v-dropdown>
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
