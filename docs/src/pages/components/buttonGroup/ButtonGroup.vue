<template>
  <div>
    <example-container title="Button Group">
      <v-button-group role="group" label="Basic example">
        <v-button vStyle="secondary">Left</v-button>
        <v-button vStyle="secondary">Middle</v-button>
        <v-button vStyle="secondary">Right</v-button>
      </v-button-group>
      <v-code>
        <script type="text/plain">
        <v-button-group role="group" label="Basic example">
          <v-button vStyle="secondary">Left</v-button>
          <v-button vStyle="secondary">Middle</v-button>
          <v-button vStyle="secondary">Right</v-button>
        </v-button-group>
        </script>
      </v-code>
    </example-container>


    <example-container title="Button toolbar">
      <v-button-group role="toolbar" label="Toolbar with button groups" toolbar>
        <v-button-group role="group" label="First group" space>
          <v-button vStyle="secondary">1</v-button>
          <v-button vStyle="secondary">2</v-button>
          <v-button vStyle="secondary">3</v-button>
          <v-button vStyle="secondary">4</v-button>
        </v-button-group>
        <v-button-group role="group" label="Second group" space>
          <v-button vStyle="secondary">5</v-button>
          <v-button vStyle="secondary">6</v-button>
          <v-button vStyle="secondary">7</v-button>
        </v-button-group>
        <v-button-group role="group" label="Third group">
          <v-button vStyle="secondary">8</v-button>
        </v-button-group>
      </v-button-group>
      <v-code>
        <script type="text/plain">
        <v-button-group role="toolbar" label="Toolbar with button groups" toolbar>
          <v-button-group role="group" label="First group" space>
            <v-button vStyle="secondary">1</v-button>
            <v-button vStyle="secondary">2</v-button>
            <v-button vStyle="secondary">3</v-button>
            <v-button vStyle="secondary">4</v-button>
          </v-button-group>
          <v-button-group role="group" label="Second group" space>
            <v-button vStyle="secondary">5</v-button>
            <v-button vStyle="secondary">6</v-button>
            <v-button vStyle="secondary">7</v-button>
          </v-button-group>
          <v-button-group role="group" label="Third group">
            <v-button vStyle="secondary">8</v-button>
          </v-button-group>
        </v-button-group>
        </script>
      </v-code>
    </example-container>

    <example-container title="Button toolbar">
      <v-button-group role="toolbar" label="Toolbar with button groups" toolbar>
        <v-button-group role="group" label="First group" space>
          <v-button vStyle="secondary">1</v-button>
          <v-button vStyle="secondary">2</v-button>
          <v-button vStyle="secondary">3</v-button>
          <v-button vStyle="secondary">4</v-button>
        </v-button-group>
        <div class="input-group">
          <span class="input-group-addon" id="btnGroupAddon">@</span>
          <input type="text" class="form-control" placeholder="Input group example" aria-describedby="btnGroupAddon">
        </div>
      </v-button-group>
      <v-code>
        <script type="text/plain">
        <v-button-group role="toolbar" label="Toolbar with button groups" toolbar>
          <v-button-group role="group" label="First group" space>
            <v-button vStyle="secondary">1</v-button>
            <v-button vStyle="secondary">2</v-button>
            <v-button vStyle="secondary">3</v-button>
            <v-button vStyle="secondary">4</v-button>
          </v-button-group>
          <div class="input-group">
            <span class="input-group-addon" id="btnGroupAddon">@</span>
            <input type="text" class="form-control" placeholder="Input group example" aria-describedby="btnGroupAddon">
          </div>
        </v-button-group>
        </script>
      </v-code>


      <v-button-group role="toolbar" label="Toolbar with button groups" toolbar justify>
        <v-button-group role="group" label="First group" space>
          <v-button vStyle="secondary">1</v-button>
          <v-button vStyle="secondary">2</v-button>
          <v-button vStyle="secondary">3</v-button>
          <v-button vStyle="secondary">4</v-button>
        </v-button-group>
        <div class="input-group">
          <span class="input-group-addon" id="btnGroupAddon2">@</span>
          <input type="text" class="form-control" placeholder="Input group example" aria-describedby="btnGroupAddon2">
        </div>
      </v-button-group>
      <v-code>
        <script type="text/plain">
        <v-button-group role="toolbar" label="Toolbar with button groups" toolbar justify>
          <v-button-group role="group" label="First group" space>
            <v-button vStyle="secondary">1</v-button>
            <v-button vStyle="secondary">2</v-button>
            <v-button vStyle="secondary">3</v-button>
            <v-button vStyle="secondary">4</v-button>
          </v-button-group>
          <div class="input-group">
            <span class="input-group-addon" id="btnGroupAddon2">@</span>
            <input type="text" class="form-control" placeholder="Input group example" aria-describedby="btnGroupAddon2">
          </div>
        </v-button-group>
        </script>
      </v-code>
    </example-container>



    <example-container title="Sizing">
      <v-button-group role="group" label="Basic example" size="lg">
        <v-button vStyle="secondary">Left</v-button>
        <v-button vStyle="secondary">Middle</v-button>
        <v-button vStyle="secondary">Right</v-button>
      </v-button-group>
      <br>
      <v-button-group role="group" label="Basic example">
        <v-button vStyle="secondary">Left</v-button>
        <v-button vStyle="secondary">Middle</v-button>
        <v-button vStyle="secondary">Right</v-button>
      </v-button-group>
      <br>
      <v-button-group role="group" label="Basic example" size="sm">
        <v-button vStyle="secondary">Left</v-button>
        <v-button vStyle="secondary">Middle</v-button>
        <v-button vStyle="secondary">Right</v-button>
      </v-button-group>

      <v-code>
        <script type="text/plain">
        <v-button-group role="group" label="Basic example" size="lg">
          <v-button vStyle="secondary">Left</v-button>
          <v-button vStyle="secondary">Middle</v-button>
          <v-button vStyle="secondary">Right</v-button>
        </v-button-group>
        <br>
        <v-button-group role="group" label="Basic example">
          <v-button vStyle="secondary">Left</v-button>
          <v-button vStyle="secondary">Middle</v-button>
          <v-button vStyle="secondary">Right</v-button>
        </v-button-group>
        <br>
        <v-button-group role="group" label="Basic example" size="sm">
          <v-button vStyle="secondary">Left</v-button>
          <v-button vStyle="secondary">Middle</v-button>
          <v-button vStyle="secondary">Right</v-button>
        </v-button-group>
        </script>
      </v-code>
    </example-container>

    <example-container title="Vertical variation">
      <v-vertical-button-group>
        <v-button vStyle="secondary">Button</v-button>
        <v-button vStyle="secondary">Button</v-button>
        <v-button vStyle="secondary">Button</v-button>
        <v-button vStyle="secondary">Button</v-button>
      </v-vertical-button-group>
      <v-code>
        <script type="text/plain">
        <v-vertical-button-group>
          <v-button vStyle="secondary">Button</v-button>
          <v-button vStyle="secondary">Button</v-button>
          <v-button vStyle="secondary">Button</v-button>
          <v-button vStyle="secondary">Button</v-button>
        </v-vertical-button-group>
        </script>
      </v-code>
    </example-container>

    <example-container>
      <div v-markdown="{content: buttonGroupMd}"></div>
    </example-container>
  </div>
</template>

<script>
import exampleContainer from '../../../components/ExampleContainer.vue';
import ButtonGroupMd from './ButtonGroup.md';

export default {
  components: {
    'example-container': exampleContainer
  },
  data() {
    return {
      buttonGroupMd: ButtonGroupMd
    }
  }
}
</script>
