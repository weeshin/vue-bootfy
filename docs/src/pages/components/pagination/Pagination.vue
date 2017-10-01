<template>
  <div>
    <h1>Pagination</h1>
    <example-container>
      <v-pagination title="default pagination example" :totalPages="6" :currentPage="1" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="6" :currentPage="2" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="6" :currentPage="3" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="6" :currentPage="4" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="6" :currentPage="5" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="6" :currentPage="6" @click="click"></v-pagination>
    </example-container>

    <example-container>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="1" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="2" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="3" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="4" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="5" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="6" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="7" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="8" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="9" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="10" @click="click"></v-pagination>
    </example-container>

    <example-container>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="1" :max="6" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="2" :max="6" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="3" :max="6" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="4" :max="6" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="5" :max="6" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="6" :max="6" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="7" :max="6" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="8" :max="6" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="9" :max="6" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="10" :max="6" @click="click"></v-pagination>
    </example-container>

    <example-container>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="1" :max="7" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="2" :max="7" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="3" :max="7" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="4" :max="7" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="5" :max="7" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="6" :max="7" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="7" :max="7" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="8" :max="7" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="9" :max="7" @click="click"></v-pagination>
      <v-pagination title="default pagination example" :totalPages="10" :currentPage="10" :max="7" @click="click"></v-pagination>
    </example-container>

    <example-container>
      <v-pagination title="default pagination example" :totalPages="3" :currentPage="1" :max="7" @click="click"></v-pagination>
    </example-container>
  </div>
</template>
<script>
import exampleContainer from '../../../components/ExampleContainer.vue';

export default {
  components: {
    'example-container': exampleContainer
  },
  methods: {
    click(e) {
      console.log('page ' + e);
    }
  }
};
</script>
