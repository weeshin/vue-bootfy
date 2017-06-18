<template>
  <div>
    <h1>Button Group</h1>
    <v-button-group role="group" label="Basic example">
      <v-button btnStyle="secondary">Left</v-button>
      <v-button btnStyle="secondary">Middle</v-button>
      <v-button btnStyle="secondary">Right</v-button>
    </v-button-group>

    <hr/>

    <v-button-group role="toolbar" label="Toolbar with button groups" toolbar>
      <v-button-group role="group" label="First group" space>
        <v-button btnStyle="secondary">1</v-button>
        <v-button btnStyle="secondary">2</v-button>
        <v-button btnStyle="secondary">3</v-button>
        <v-button btnStyle="secondary">4</v-button>
      </v-button-group>
      <v-button-group role="group" label="Second group" space>
        <v-button btnStyle="secondary">5</v-button>
        <v-button btnStyle="secondary">6</v-button>
        <v-button btnStyle="secondary">7</v-button>
      </v-button-group>
      <v-button-group role="group" label="Third group">
        <v-button btnStyle="secondary">8</v-button>
      </v-button-group>
    </v-button-group>

    <hr/>
    <v-button-group role="toolbar" label="Toolbar with button groups" toolbar>
      <v-button-group role="group" label="First group" space>
        <v-button btnStyle="secondary">1</v-button>
        <v-button btnStyle="secondary">2</v-button>
        <v-button btnStyle="secondary">3</v-button>
        <v-button btnStyle="secondary">4</v-button>
      </v-button-group>
      <div class="input-group">
        <span class="input-group-addon" id="btnGroupAddon">@</span>
        <input type="text" class="form-control" placeholder="Input group example" aria-describedby="btnGroupAddon">
      </div>
    </v-button-group>

    <hr/>
    <v-button-group role="toolbar" label="Toolbar with button groups" toolbar justify>
      <v-button-group role="group" label="First group" space>
        <v-button btnStyle="secondary">1</v-button>
        <v-button btnStyle="secondary">2</v-button>
        <v-button btnStyle="secondary">3</v-button>
        <v-button btnStyle="secondary">4</v-button>
      </v-button-group>
      <div class="input-group">
        <span class="input-group-addon" id="btnGroupAddon2">@</span>
        <input type="text" class="form-control" placeholder="Input group example" aria-describedby="btnGroupAddon2">
      </div>
    </v-button-group>

    <hr/>
    <v-button-group role="group" label="Basic example" size="large">
      <v-button btnStyle="secondary">Left</v-button>
      <v-button btnStyle="secondary">Middle</v-button>
      <v-button btnStyle="secondary">Right</v-button>
    </v-button-group>
    <br>
    <v-button-group role="group" label="Basic example">
      <v-button btnStyle="secondary">Left</v-button>
      <v-button btnStyle="secondary">Middle</v-button>
      <v-button btnStyle="secondary">Right</v-button>
    </v-button-group>
    <br>
    <v-button-group role="group" label="Basic example" size="small">
      <v-button btnStyle="secondary">Left</v-button>
      <v-button btnStyle="secondary">Middle</v-button>
      <v-button btnStyle="secondary">Right</v-button>
    </v-button-group>

    <hr/>
    <v-vertical-button-group>
      <v-button btnStyle="secondary">Button</v-button>
      <v-button btnStyle="secondary">Button</v-button>
      <v-button btnStyle="secondary">Button</v-button>
      <v-button btnStyle="secondary">Button</v-button>
    </v-vertical-button-group>
  </div>
</template>
