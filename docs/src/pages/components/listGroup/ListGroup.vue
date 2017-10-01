<template>
  <div>
    <h1>List Group</h1>
    <example-container>
      <v-list-group ul>
        <v-list-group-item>Cras justo odio</v-list-group-item>
        <v-list-group-item>Dapibus ac facilisis in</v-list-group-item>
        <v-list-group-item>Morbi leo risus</v-list-group-item>
        <v-list-group-item>Porta ac consectetur ac</v-list-group-item>
        <v-list-group-item>Vestibulum at eros</v-list-group-item>
      </v-list-group>
    </example-container>

    <example-container>
      <v-list-group ul>
        <v-list-group-item active>Cras justo odio</v-list-group-item>
        <v-list-group-item>Dapibus ac facilisis in</v-list-group-item>
        <v-list-group-item>Morbi leo risus</v-list-group-item>
        <v-list-group-item>Porta ac consectetur ac</v-list-group-item>
        <v-list-group-item>Vestibulum at eros</v-list-group-item>
      </v-list-group>
    </example-container>

    <example-container>
      <h2>Disabled items</h2>
      <v-list-group ul>
        <v-list-group-item disabled>Cras justo odio</v-list-group-item>
        <v-list-group-item>Dapibus ac facilisis in</v-list-group-item>
        <v-list-group-item>Morbi leo risus</v-list-group-item>
        <v-list-group-item>Porta ac consectetur ac</v-list-group-item>
        <v-list-group-item>Vestibulum at eros</v-list-group-item>
      </v-list-group>
    </example-container>

    <example-container>
      <h2>Links and buttons</h2>
      <v-list-group>
        <v-list-group-item anchor hover active>Cras justo odio</v-list-group-item>
        <v-list-group-item anchor hover>Dapibus ac facilisis in</v-list-group-item>
        <v-list-group-item anchor hover>Morbi leo risus</v-list-group-item>
        <v-list-group-item anchor hover>Porta ac consectetur ac</v-list-group-item>
        <v-list-group-item anchor hover>Vestibulum at eros</v-list-group-item>
      </v-list-group>
    </example-container>

    <example-container>
      <h2>Contextual classes</h2>
      <v-list-group ul>
        <v-list-group-item>Cras justo odio</v-list-group-item>
        <v-list-group-item vStyle="success">Dapibus ac facilisis in</v-list-group-item>
        <v-list-group-item vStyle="info">Morbi leo risus</v-list-group-item>
        <v-list-group-item vStyle="warning">Porta ac consectetur ac</v-list-group-item>
        <v-list-group-item vStyle="danger">Vestibulum at eros</v-list-group-item>
      </v-list-group>
    </example-container>

    <example-container>
      <h2>Contextual classes</h2>
      <v-list-group ul>
        <v-list-group-item justify>
          Cras justo odio
          <span class="badge badge-default badge-pill">14</span>
        </v-list-group-item>
        <v-list-group-item justify>
          Dapibus ac facilisis in
          <span class="badge badge-default badge-pill">2</span>
        </v-list-group-item>
        <v-list-group-item justify>
          Morbi leo risus
          <span class="badge badge-default badge-pill">1</span>
        </v-list-group-item>
      </v-list-group>
    </example-container>
  </div>
</template>
<script>
import exampleContainer from '../../../components/ExampleContainer.vue';

export default {
  components: {
    'example-container': exampleContainer
  }
};

</script>
