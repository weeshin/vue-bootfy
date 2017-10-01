<template>
  <div>
    <example-container>
      <v-code lang="language-js">export default {
    name: 'app',
    data () {
        return {
             msg: 'Welcome to Your Vue.js App'
        }
    }
}
      </v-code>
    </example-container>

    <example-container>
      <v-code lang="language-css">body                            { background:#F2F2F2; }
h1, h2, h3, h4, h5, h6          { font-family:'Raleway'; }
.container                      { width:90%; }
      </v-code>
    </example-container>

    <example-container>
      <v-code lang="language-markup" lineNumbers>
        <script type="text/plain"><html>
    <img src="example.png">
    <h3>h3 heading1</h3>
  </html>
        </script>
      </v-code>
    </example-container>

    <example-container>
      <pre><code class="language-css line-numbers">
      @media <mark>screen</mark> {
      	div {
      		<mark>text</mark>-decoration: <mark><mark>under</mark>line</mark>;
      		back<mark>ground: url</mark>('foo.png');
      	}
      }</code></pre>
    </example-container>

  <example-container title="Markdown">
    <div v-markdown="{ content: data }">
    </div>
  </example-container>

  </div>
</template>

<script>
import sample from './sample.md';
import exampleContainer from '../../../components/ExampleContainer.vue';


export default {
  components: {
    'example-container': exampleContainer
  },
  data() {
    return {
      data: sample
    }
  }
}
</script>
