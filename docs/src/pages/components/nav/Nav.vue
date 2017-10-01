<template>
  <div>
    <h1>Nav</h1>
    <example-container>
      <v-nav>
        <v-nav-item active href="#">Active</v-nav-item>
        <v-nav-item href="#">Link</v-nav-item>
        <v-nav-item href="#">Link</v-nav-item>
        <v-nav-item href="#" disabled>Disable</v-nav-item>
      </v-nav>
    </example-container>

    <example-container>
      <v-nav center>
        <v-nav-item active href="#">Active</v-nav-item>
        <v-nav-item href="#">Link</v-nav-item>
        <v-nav-item href="#">Link</v-nav-item>
        <v-nav-item href="#" disabled>Disable</v-nav-item>
      </v-nav>
    </example-container>

    <example-container>
      <v-nav end>
        <v-nav-item active href="#">Active</v-nav-item>
        <v-nav-item href="#">Link</v-nav-item>
        <v-nav-item href="#">Link</v-nav-item>
        <v-nav-item href="#" disabled>Disable</v-nav-item>
      </v-nav>
    </example-container>

    <example-container>
      <v-nav vertical>
        <v-nav-item active href="#">Active</v-nav-item>
        <v-nav-item href="#">Link</v-nav-item>
        <v-nav-item href="#">Link</v-nav-item>
        <v-nav-item href="#" disabled>Disable</v-nav-item>
      </v-nav>
    </example-container>

    <example-container>
      <h1>Tab</h1>
      <v-nav tabs>
        <v-nav-item active href="#">Active</v-nav-item>
        <v-nav-item href="#">Link</v-nav-item>
        <v-nav-item href="#">Link</v-nav-item>
        <v-nav-item href="#" disabled>Disable</v-nav-item>
      </v-nav>
    </example-container>

    <example-container>
      <v-nav pills>
        <v-nav-item active href="#">Active</v-nav-item>
        <v-nav-item href="#">Link</v-nav-item>
        <v-nav-item href="#">Link</v-nav-item>
        <v-nav-item href="#" disabled>Disable</v-nav-item>
      </v-nav>
    </example-container>

    <example-container>
      <v-nav pills fill>
        <v-nav-item active href="#">Active</v-nav-item>
        <v-nav-item href="#">Link</v-nav-item>
        <v-nav-item href="#">Link</v-nav-item>
        <v-nav-item href="#" disabled>Disable</v-nav-item>
      </v-nav>
    </example-container>

    <example-container>
      <v-nav pills justified>
        <v-nav-item active href="#">Active</v-nav-item>
        <v-nav-item href="#">Link</v-nav-item>
        <v-nav-item href="#">Link</v-nav-item>
        <v-nav-item href="#" disabled>Disable</v-nav-item>
      </v-nav>
    </example-container>

    <example-container>
      <v-nav tab>
        <v-nav-item active href="#">Active</v-nav-item>
        <v-nav-item dropdown>
          <v-dropdown-menu>
            <v-dropdown-item>Action</v-dropdown-item>
            <v-dropdown-item>Another action</v-dropdown-item>
            <v-dropdown-item>Something else here</v-dropdown-item>
            <v-dropdown-divider></v-dropdown-divider>
            <v-dropdown-item>Separated link</v-dropdown-item>
          </v-dropdown-menu>
        </v-nav-item>
        <v-nav-item href="#">Link</v-nav-item>
        <v-nav-item href="#" disabled>Disable</v-nav-item>
      </v-nav>
    </example-container>

    <example-container>
      <h2>Tab Pane</h2>
      <v-tabs :value="tabNumber">
        <v-tab title="title 1">
          <div class="tabContainer">
            title 1 content
          </div>
        </v-tab>
        <v-tab title="title 2" >
          <div class="tabContainer">
            title 2 content
          </div>
        </v-tab>
        <v-tab title="title 3">
          <div class="tabContainer">
            title 3 content
          </div>
        </v-tab>
      </v-tabs>
      <v-button @click="changeTab">change</v-button>
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
      tabNumber: 0
    };
  },
  methods: {
    changeTab() {
      this.tabNumber++;
      console.log(this.tabNumber);
    }
  }
};
</script>

<style scoped>
.tabContainer {
  /*border: 1px solid #0275d8;  */
  padding: 10px;
  height: 300px;
}
</style>
