<template>
  <div>
    <h1>Badges</h1>
    <example-container>
      <v-badge vStyle="primary">Primary</v-badge>
      <v-badge vStyle="secondary">Secondary</v-badge>
      <v-badge vStyle="success">Success</v-badge>
      <v-badge vStyle="danger">Danger</v-badge>
      <v-badge vStyle="warning">Warning</v-badge>
      <v-badge vStyle="info">Info</v-badge>
      <v-badge vStyle="light">Light</v-badge>
      <v-badge vStyle="dark">Dark</v-badge>

      <v-code>
        <script type="text/plain">
        <v-badge vStyle="primary">Primary</v-badge>
        <v-badge vStyle="secondary">Secondary</v-badge>
        <v-badge vStyle="success">Success</v-badge>
        <v-badge vStyle="danger">Danger</v-badge>
        <v-badge vStyle="warning">Warning</v-badge>
        <v-badge vStyle="info">Info</v-badge>
        <v-badge vStyle="light">Light</v-badge>
        <v-badge vStyle="dark">Dark</v-badge>
        </script>
      </v-code>
    </example-container>

    <example-container>
      <v-badge vStyle="primary" pill>Primary</v-badge>
      <v-badge vStyle="secondary" pill>Secondary</v-badge>
      <v-badge vStyle="success" pill>Success</v-badge>
      <v-badge vStyle="danger" pill>Danger</v-badge>
      <v-badge vStyle="warning" pill>Warning</v-badge>
      <v-badge vStyle="info" pill>Info</v-badge>
      <v-badge vStyle="light" pill>Light</v-badge>
      <v-badge vStyle="dark" pill>Dark</v-badge>
      <v-code>
        <script type="text/plain">
        <v-badge vStyle="primary" pill>Primary</v-badge>
        <v-badge vStyle="secondary" pill>Secondary</v-badge>
        <v-badge vStyle="success" pill>Success</v-badge>
        <v-badge vStyle="danger" pill>Danger</v-badge>
        <v-badge vStyle="warning" pill>Warning</v-badge>
        <v-badge vStyle="info" pill>Info</v-badge>
        <v-badge vStyle="light" pill>Light</v-badge>
        <v-badge vStyle="dark" pill>Dark</v-badge>
        </script>
      </v-code>
    </example-container>

    <example-container>
      <span v-badge="{vStyle: 'primary'}">Primary</span>
      <span v-badge="{vStyle: 'secondary'}">Secondary</span>
      <span v-badge="{vStyle: 'success'}">Success</span>
      <span v-badge="{vStyle: 'danger'}">Danger</span>
      <span v-badge="{vStyle: 'warning'}">Warning</span>
      <span v-badge="{vStyle: 'info'}">Info</span>
      <span v-badge="{vStyle: 'light'}">Light</span>
      <span v-badge="{vStyle: 'dark'}">Dark</span>
      <v-code>
        <script type="text/plain">
        <span v-badge="{vStyle: 'primary'}">Primary</span>
        <span v-badge="{vStyle: 'secondary'}">Secondary</span>
        <span v-badge="{vStyle: 'success'}">Success</span>
        <span v-badge="{vStyle: 'danger'}">Danger</span>
        <span v-badge="{vStyle: 'warning'}">Warning</span>
        <span v-badge="{vStyle: 'info'}">Info</span>
        <span v-badge="{vStyle: 'light'}">Light</span>
        <span v-badge="{vStyle: 'dark'}">Dark</span>
        </script>
      </v-code>
    </example-container>

    <example-container>
      <span v-badge="{vStyle: 'primary', pill: true}">Primary</span>
      <span v-badge="{vStyle: 'secondary', pill: true}">Secondary</span>
      <span v-badge="{vStyle: 'success', pill: true}">Success</span>
      <span v-badge="{vStyle: 'danger', pill: true}">Danger</span>
      <span v-badge="{vStyle: 'warning', pill: true}">Warning</span>
      <span v-badge="{vStyle: 'info', pill: true}">Info</span>
      <span v-badge="{vStyle: 'light', pill: true}">Light</span>
      <span v-badge="{vStyle: 'dark', pill: true}">Dark</span>
      <v-code>
        <script type="text/plain">
        <span v-badge="{vStyle: 'primary', pill: true}">Primary</span>
        <span v-badge="{vStyle: 'secondary', pill: true}">Secondary</span>
        <span v-badge="{vStyle: 'success', pill: true}">Success</span>
        <span v-badge="{vStyle: 'danger', pill: true}">Danger</span>
        <span v-badge="{vStyle: 'warning', pill: true}">Warning</span>
        <span v-badge="{vStyle: 'info', pill: true}">Info</span>
        <span v-badge="{vStyle: 'light', pill: true}">Light</span>
        <span v-badge="{vStyle: 'dark', pill: true}">Dark</span>
        </script>
      </v-code>
    </example-container>

    <example-container>
      <a href="#" v-badge="{vStyle: 'primary'}">Primary</a>
      <a href="#" v-badge="{vStyle: 'secondary'}">Secondary</a>
      <a href="#" v-badge="{vStyle: 'success'}">Success</a>
      <a href="#" v-badge="{vStyle: 'danger'}">Danger</a>
      <a href="#" v-badge="{vStyle: 'warning'}">Warning</a>
      <a href="#" v-badge="{vStyle: 'info'}">Info</a>
      <a href="#" v-badge="{vStyle: 'light'}">Light</a>
      <a href="#" v-badge="{vStyle: 'dark'}">Dark</a>
      <v-code>
        <script type="text/plain">
        <a href="#" v-badge="{vStyle: 'primary'}">Primary</a>
        <a href="#" v-badge="{vStyle: 'secondary'}">Secondary</a>
        <a href="#" v-badge="{vStyle: 'success'}">Success</a>
        <a href="#" v-badge="{vStyle: 'danger'}">Danger</a>
        <a href="#" v-badge="{vStyle: 'warning'}">Warning</a>
        <a href="#" v-badge="{vStyle: 'info'}">Info</a>
        <a href="#" v-badge="{vStyle: 'light'}">Light</a>
        <a href="#" v-badge="{vStyle: 'dark'}">Dark</a>
        </script>
      </v-code>
    </example-container>

    <example-container>
      <div v-markdown="{content:badgeMd}">
      </div>
    </example-container>
  </div>
</template>
<script>
import exampleContainer from '../../../components/ExampleContainer.vue';
import BadgeMd from './Badge.md';

export default {
  components: {
    'example-container': exampleContainer
  },
  data() {
    return {
      badgeMd: BadgeMd
    }
  }
}

</script>
