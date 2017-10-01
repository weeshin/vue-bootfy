<template>
  <div>
    <h1>Card</h1>

    <example-container title="Example">
      <v-card style="width: 20rem;">
        <v-card-img top src="/assets/imagecap318x180.svg" alt="Card image"></v-card-img>
        <v-card-body>
          <v-card-title size="h4">Card title</v-card-title>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </v-card-body>
      </v-card>
      <v-code>
        <script type="text/plain">
        <v-card style="width: 20rem;">
          <v-card-img top src="/assets/imagecap318x180.svg" alt="Card image"></v-card-img>
          <v-card-body>
            <v-card-title size="h4">Card title</v-card-title>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </v-card-body>
        </v-card>
        </script>
      </v-code>
    </example-container>

    <example-container title="Blocks">
      <v-card>
        <v-card-body>
          This is some text within a card block.
        </v-card-body>
      </v-card>
      <v-code>
        <script type="text/plain">
        <v-card>
          <v-card-body>
            This is some text within a card block.
          </v-card-body>
        </v-card>
        </script>
      </v-code>
    </example-container>

    <example-container title="Titles, text, and links">
      <v-card style="width: 20rem;">
        <v-card-body>
          <v-card-title size="h4">Card title</v-card-title>
          <h6 v-cardheader>Card subtitle</h6>

          <v-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</v-card-text>
          <v-card-link href="#">Card link</v-card-link>
          <v-card-link href="#">Another link</v-card-link>
        </v-card-body>
      </v-card>
      <v-code>
        <script type="text/plain">
        <v-card style="width: 20rem;">
          <v-card-body>
            <v-card-title size="h4">Card title</v-card-title>
            <h6 v-cardheader>Card subtitle</h6>

            <v-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</v-card-text>
            <v-card-link href="#">Card link</v-card-link>
            <v-card-link href="#">Another link</v-card-link>
          </v-card-body>
        </v-card>
        </script>
      </v-code>
    </example-container>

    <example-container title="Images">
      <v-card style="width: 20rem;">
        <v-card-img top src="/assets/imagecap.svg" alt="Card image cap"></v-card-img>
        <v-card-body>
          <v-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</v-card-text>
        </v-card-body>
      </v-card>
    </example-container>

    <example-container title="List groups">
      <v-card style="width: 20rem;">
        <v-list-group>
          <v-list-group-item>Cras justo odio</v-list-group-item>
          <v-list-group-item>Dapibus ac facilisis in</v-list-group-item>
          <v-list-group-item>Vestibulum at eros</v-list-group-item>
        </v-list-group>
      </v-card>
    </example-container>

    <example-container title="Images">
      <v-card style="width: 20rem;">
        <v-card-img top src="/assets/imagecap.svg" alt="Card image cap"></v-card-img>
        <v-card-body>
          <v-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</v-card-text>
        </v-card-body>
        <v-list-group>
          <v-list-group-item>Cras justo odio</v-list-group-item>
          <v-list-group-item>Dapibus ac facilisis in</v-list-group-item>
          <v-list-group-item>Vestibulum at eros</v-list-group-item>
        </v-list-group>
        <v-card-body>
          <v-card-link href="#">Card link</v-card-link>
          <v-card-link href="#">Another link</v-card-link>
        </v-card-body>
      </v-card>
    </example-container>

    <example-container title="Header and footer">
      <v-card>
        <v-card-header>Featured</v-card-header>
        <v-card-body>
          <v-card-title size="h4">Special title treatment</v-card-title>
          <v-card-text>With supporting text below as a natural lead-in to additional content.</v-card-text>
          <v-button vStyle="primary">Go somewhere</v-button>
        </v-card-body>
      </v-card>
    </example-container>

    <example-container title="Header and footer to <h*>">
      <v-card>
        <v-card-header size="h4">Featured</v-card-header>
        <v-card-body>
          <v-card-title size="h4">Special title treatment</v-card-title>
          <v-card-text>With supporting text below as a natural lead-in to additional content.</v-card-text>
          <v-button vStyle="primary">Go somewhere</v-button>
        </v-card-body>
      </v-card>
    </example-container>
  </div>
</template>
<script>
import exampleContainer from '../../../components/ExampleContainer.vue';
import CardMd from './Card.md';

export default {
  components: {
    'example-container': exampleContainer
  },
  data() {
    return {
      cardMd: CardMd
    }
  }
}
</script>
