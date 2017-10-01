<template>
  <div>
    <h1>Input Group</h1>
    <p>Easily extend form controls by adding text, buttons, or button groups on either side of textual</p>

    <h2>Basic Example</h2>
    <example-container>
      <v-input-group>
        <span slot="left">@</span>
        <v-input placeholder="Username"/>
        <span  slot="right">@example.com</span>
      </v-input-group>

      <v-input-group>
        <span slot="left">
          <input type="checkbox" aria-label="Checkbox for following text input">
        </span>
        <v-input placeholder="Username"/>
      </v-input-group>

      <v-input-group>
        <span slot="right">
          <input type="checkbox" aria-label="Checkbox for following text input">
        </span>
        <v-input placeholder="Username"/>
      </v-input-group>

      <v-input-group>
        <span slot="right">
          <input type="checkbox" aria-label="Checkbox for following text input">
        </span>
        <v-input placeholder="Username"/>
      </v-input-group>


      <v-input-group>
        <v-dropdown title="Action" vStyle="secondary" inputBtnGroup>
          <v-dropdown-item>Action</v-dropdown-item>
          <v-dropdown-item>Another action</v-dropdown-item>
          <v-dropdown-item>Something else here</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item>Separated link</v-dropdown-item>
        </v-dropdown>
        <v-input></v-input>
      </v-input-group>

      <v-input-group>
        <v-input-group-btn>
          <v-dropdown title="Action"  vStyle="secondary" size="lg">
            <v-dropdown-item>Action</v-dropdown-item>
            <v-dropdown-item>Another action</v-dropdown-item>
            <v-dropdown-item>Something else here</v-dropdown-item>
            <v-dropdown-divider/>
            <v-dropdown-item>Separated link</v-dropdown-item>
          </v-dropdown>
        </v-input-group-btn>
        <v-input></v-input>
      </v-input-group>
      <v-input-group>
        <v-input></v-input>
        <v-input-group-btn>
          <v-dropdown title="Action"  vStyle="secondary" size="lg">
            <v-dropdown-item>Action</v-dropdown-item>
            <v-dropdown-item>Another action</v-dropdown-item>
            <v-dropdown-item>Something else here</v-dropdown-item>
            <v-dropdown-divider/>
            <v-dropdown-item>Separated link</v-dropdown-item>
          </v-dropdown>
        </v-input-group-btn>
      </v-input-group>

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
