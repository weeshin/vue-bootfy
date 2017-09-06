<template>
  <div>
    <h1>Alerts</h1>

    <example-container>
      <v-alert vStyle="primary">
        This is a primary alert—check it out!
      </v-alert>
      <v-alert vStyle="secondary">
        This is a secondary alert—check it out!
      </v-alert>
      <v-alert vStyle="success">
        This is a success alert—check it out!
      </v-alert>
      <v-alert vStyle="danger">
        This is a danger alert—check it out!
      </v-alert>
      <v-alert vStyle="warning">
        This is a warning alert—check it out!
      </v-alert>
      <v-alert vStyle="info">
        This is a info alert—check it out!
      </v-alert>
      <v-alert vStyle="light">
        This is a light alert—check it out!
      </v-alert>
      <v-alert vStyle="dark">
        This is a dark alert—check it out!
      </v-alert>

      <v-code>
        <script type="text/plain">
        <v-alert vStyle="primary">
          This is a primary alert—check it out!
        </v-alert>
        <v-alert vStyle="secondary">
          This is a secondary alert—check it out!
        </v-alert>
        <v-alert vStyle="success">
          This is a success alert—check it out!
        </v-alert>
        <v-alert vStyle="danger">
          This is a danger alert—check it out!
        </v-alert>
        <v-alert vStyle="warning">
          This is a warning alert—check it out!
        </v-alert>
        <v-alert vStyle="info">
          This is a info alert—check it out!
        </v-alert>
        <v-alert vStyle="light">
          This is a light alert—check it out!
        </v-alert>
        <v-alert vStyle="dark">
          This is a dark alert—check it out!
        </v-alert>
        </script>
      </v-code>
    </example-container>

    <h1>Link Color</h1>
    <example-container>
      <v-alert vStyle="primary">
        This is a primary alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.
      </v-alert>
      <v-alert vStyle="secondary">
        This is a secondary alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.
      </v-alert>
      <v-alert vStyle="success">
        This is a success alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.
      </v-alert>
      <v-alert vStyle="danger">
        This is a danger alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.
      </v-alert>
      <v-alert vStyle="warning">
        This is a warning alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.
      </v-alert>
      <v-alert vStyle="info">
        This is a info alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.
      </v-alert>
      <v-alert vStyle="light">
        This is a light alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.
      </v-alert>
      <v-alert vStyle="dark">
        This is a dark alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.
      </v-alert>

      <v-code>
        <script type="text/plain">
        <v-alert vStyle="primary">
          This is a primary alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.
        </v-alert>
        <v-alert vStyle="secondary">
          This is a secondary alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.
        </v-alert>
        <v-alert vStyle="success">
          This is a success alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.
        </v-alert>
        <v-alert vStyle="danger">
          This is a danger alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.
        </v-alert>
        <v-alert vStyle="warning">
          This is a warning alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.
        </v-alert>
        <v-alert vStyle="info">
          This is a info alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.
        </v-alert>
        <v-alert vStyle="light">
          This is a light alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.
        </v-alert>
        <v-alert vStyle="dark">
          This is a dark alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.
        </v-alert>
        </script>
      </v-code>

    </example-container>

    <h1>Additional content</h1>
    <p>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>
    <example-container>
      <v-alert vStyle="success">
        <h4 class="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </v-alert>
      <v-code>
        <script type="text/plain">
        <v-alert vStyle="success">
          <h4 class="alert-heading">Well done!</h4>
          <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
          <hr>
          <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </v-alert>
        </script>
      </v-code>
    </example-container>

    <example-container>
      <v-alert vStyle="warning" dismissible>
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      </v-alert>
      <v-code>
        <script type="text/plain">
        <v-alert vStyle="warning" dismissible>
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        </v-alert>
        </script>
      </v-code>
    </example-container>

    <example-container>
      <v-alert vStyle="success" :show="showAlert">Success show alert</v-alert>
      <v-button vStyle="info" @click="showAlertClick">show alert</v-button>

      <v-code>
        <script type="text/plain">
        <v-alert vStyle="success" :show="showAlert">Success show alert</v-alert>
        <v-button vStyle="info" @click="showAlertClick">show alert</v-button>
        </script>
      </v-code>
    </example-container>

    <example-container>
      <h2>Properties</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Default Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">dismissible</th>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <th scope="row">show</th>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <th scope="row">vStyle</th>
            <td>String</td>
            <td>[primary, secondary, success, info, warning, danger, light, dark]</td>
          </tr>
        </tbody>
      </table>
      <h2>Events</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Arguments</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">dismissed-callback</th>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </example-container>
  </div>
</template>
<script>
import exampleContainer from '../../components/ExampleContainer.vue';

export default {
  components: {
    'example-container': exampleContainer
  },
  data() {
    return {
      showAlert: false
    };
  },
  methods: {
    showAlertClick() {
      this.showAlert = true;
      console.log('show alert click');
    }
  }
};
</script>
