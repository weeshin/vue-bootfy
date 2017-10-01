<template>
  <div>
    <h1>Dropdown</h1>

    <example-container>
      <div class="row">
        <v-dropdown title="Primary" :items="items" vStyle="primary" split>
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
        <v-dropdown title="Secondary" :items="items" vStyle="secondary" split>
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
        <v-dropdown title="Success" :items="items" vStyle="success" split>
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
        <v-dropdown title="Info" :items="items" vStyle="info" split>
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
        <v-dropdown title="Warning" :items="items" vStyle="warning" split>
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
        <v-dropdown title="Danger" :items="items" vStyle="danger" split>
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
      </div>
      <v-code lang="language-markup">
        <script type="text/plain"><v-dropdown title="Danger" vStyle="danger" split>
  <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
  <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
  <v-dropdown-divider/>
  <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
</v-dropdown>
        </script>
      </v-code>
    </example-container>

    <example-container>
      <div class="row">
        <v-dropdown title="Primary" :items="items" vStyle="primary">
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
        <v-dropdown title="Secondary" :items="items" vStyle="secondary">
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
        <v-dropdown title="Success" :items="items" vStyle="success">
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
        <v-dropdown title="Info" :items="items" vStyle="info">
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
        <v-dropdown title="Warining" :items="items" vStyle="warning">
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
        <v-dropdown title="Danger" :items="items" vStyle="danger">
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
      </div>
      <v-code lang="language-markup">
        <script type="text/plain"><v-dropdown title="Danger" vStyle="danger">
  <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
  <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
  <v-dropdown-divider/>
  <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
</v-dropdown>
        </script>
      </v-code>
    </example-container>

    <br>

    <example-container>
      <div class="row">
        <v-dropdown title="Dropdown menu" :items="items" vStyle="secondary" size="lg">
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
        <v-dropdown title="Dropdown menu" :items="items" vStyle="secondary" size="lg" split>
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
      </div>
    </example-container>

    <br>

    <example-container>
      <div class="row">
        <v-dropdown title="Dropdown menu" :items="items" vStyle="secondary" size="sm">
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
        <v-dropdown title="Dropdown menu" :items="items" vStyle="secondary" size="sm" split>
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
      </div>
    </example-container>

    <br>

    <example-container>
      <div class="row">
        <v-dropdown title="Dropdown menu" :items="items" vStyle="secondary" size="lg" up>
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
        <v-dropdown title="Dropdown menu" :items="items" vStyle="secondary" size="lg" split up>
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
      </div>
    </example-container>

    <br>

    <example-container>
      <div class="row">
        <v-dropdown title="Dropdown menu" :items="items" vStyle="secondary" size="lg" rightAlign>
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
        <v-dropdown title="Dropdown menu" :items="items" vStyle="secondary" size="lg" split rightAlign>
          <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
          <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
        </v-dropdown>
      </div>
      <v-code lang="language-markup">
        <script type="text/plain">
<v-dropdown title="Dropdown menu" :items="items" vStyle="secondary" size="lg" rightAlign>
  <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
  <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
  <v-dropdown-divider/>
  <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
</v-dropdown>
<v-dropdown title="Dropdown menu" :items="items" vStyle="secondary" size="lg" split rightAlign>
  <v-dropdown-item @click="itemClick">Action1</v-dropdown-item>
  <v-dropdown-item @click="itemClick">Action2</v-dropdown-item>
  <v-dropdown-divider/>
  <v-dropdown-item @click="itemClick">Action3</v-dropdown-item>
</v-dropdown>
        </script>
      </v-code>
    </example-container>

    <example-container>
      <div v-markdown="{ content: dropdownMd }">
      </div>
    </example-container>
  </div>
</template>

<script>
import exampleContainer from '../../../components/ExampleContainer.vue';
import DropdownMd from './Dropdown.md';

export default {
  components: {
    'example-container': exampleContainer
  },
  data() {
    return {
      items: [
        {id: '1', name: 'Action1'},
        {id: '2', name: 'Action2'}
      ],
      dropdownMd: DropdownMd
    };
  },
  methods: {
    itemClick: function() {
      console.info('item click');
    }
  }
};
</script>
