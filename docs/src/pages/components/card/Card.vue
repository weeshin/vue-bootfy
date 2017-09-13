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
          <div v-cardheader>div card subtitle</div>
          <h6 v-cardheader>Card subtitle</h6>

          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </v-card-body>
      </v-card>
      <v-code>
        <script type="text/plain">
        <v-card header="test card header" style="width: 20rem;">
          <v-card-body>
            <v-card-title size="h4">Card title</v-card-title>
            <h6 v-cardheader>Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </v-card-body>
        </v-card>
        </script>
      </v-code>
    </example-container>

    <v-card>
      <v-card-header>
        Default header
      </v-card-header>
      <v-card-block>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </v-card-block>
    </v-card>

    <v-card>
      <v-card-header size="h1">
        H1 header
      </v-card-header>
      <v-card-block>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </v-card-block>
    </v-card>
    <v-card>
      <v-card-header size="h2">
        H2 header
      </v-card-header>
      <v-card-block>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </v-card-block>
    </v-card>
    <v-card>
      <v-card-header size="h3">
        H3 header
      </v-card-header>
      <v-card-block>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </v-card-block>
    </v-card>
    <v-card>
      <v-card-header size="h4">
        H4 header
      </v-card-header>
      <v-card-block>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </v-card-block>
    </v-card>
    <v-card>
      <v-card-header size="h5">
        H5 header
      </v-card-header>
      <v-card-block>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </v-card-block>
    </v-card>
    <v-card>
      <v-card-header size="h6">
        H6 header
      </v-card-header>
      <v-card-block>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </v-card-block>
    </v-card>

    <v-card textcenter>
      <v-card-header>
        Featured
      </v-card-header>
      <v-card-block>
        <v-card-title size="h3">Special title treatment</v-card-title>
        <v-card-text>With supporting text below as a natural lead-in to additional content.</v-card-text>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </v-card-block>
      <v-card-footer>2 days ago</v-card-footer>
    </v-card>

    <div class="row">
      <div class="col-sm-6">
        <v-card>
          <v-card-header size="h3">
            Special title treatment
          </v-card-header>
          <v-card-block>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <v-button btnStyle="primary">Go somewhere</v-button>
          </v-card-block>
        </v-card>
      </div>
      <div class="col-sm-6">
        <v-card>
          <v-card-header size="h3">
            Special title treatment
          </v-card-header>
          <v-card-block>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <v-button btnStyle="primary">Go somewhere</v-button>
          </v-card-block>
        </v-card>
      </div>
    </div>

    <v-card inverse>
      <v-card-img src="/assets/imagecap.svg" alt="Card image"></v-card-img>
      <v-card-img-overlay>
        <v-card-title size="h4">Card title</v-card-title>
        <v-card-text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</v-card-text>
        <v-card-text><small class="text-muted">Last updated 3 mins ago</small></v-card-text>
      </v-card-img-overlay>
    </v-card>

    <v-card vStyle="primary" inverse>
      <v-card-header size="h3">
        Special title treatment
      </v-card-header>
      <v-card-block>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <v-button btnStyle="primary">Go somewhere</v-button>
      </v-card-block>
    </v-card>
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
