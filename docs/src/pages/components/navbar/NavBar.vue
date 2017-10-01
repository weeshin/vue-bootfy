<template>
  <div>
    <h1>NavBar</h1>
    <example-container>
      <v-nav-bar>
        <v-nav-bar-toggler-button right></v-nav-bar-toggler-button>
        <v-nav-bar-brand href="#">Navbar</v-nav-bar-brand>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <v-nav navbar>
            <v-nav-bar-item href="#" active>Home <span class="sr-only">(current)</span></v-nav-bar-item>
            <v-nav-bar-item href="#">Link</v-nav-bar-item>
            <v-nav-bar-item href="#" disabled>Disabled</v-nav-bar-item>
          </v-nav>

          <v-form navbar>
            <input class="form-control mr-sm-2" type="text" placeholder="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </v-form>
        </div>
      </v-nav-bar>
    </example-container>

    <example-container>
      <v-nav-bar>
        <v-nav-bar-brand href="#">
          <img src="/assets/bootstrap-solid.svg" width="30" height="30" alt="">
        </v-nav-bar-brand>
      </v-nav-bar>
    </example-container>

    <example-container>
      <v-nav-bar>
        <v-nav-bar-brand href="#">
          <img src="/assets/bootstrap-solid.svg" width="30" height="30" alt="">
          Bootstrap
        </v-nav-bar-brand>
      </v-nav-bar>
    </example-container>

    <example-container>
      <v-nav-bar>
        <v-nav-bar-toggler-button right></v-nav-bar-toggler-button>
        <v-nav-bar-brand href="#">Navbar</v-nav-bar-brand>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <v-nav navbar>
            <v-nav-bar-item href="#" active>Home <span class="sr-only">(current)</span></v-nav-bar-item>
            <v-nav-bar-item href="#">Features</v-nav-bar-item>
            <v-nav-bar-item href="#">Pricing</v-nav-bar-item>
            <v-nav-bar-item href="http://example.com" dropdown id="navbarDropdownMenuLink">
              Dropdown link
              <v-dropdown-menu slot="menu" aria-labelledby="navbarDropdownMenuLink">
                <v-dropdown-item>Action</v-dropdown-item>
                <v-dropdown-item>Another action</v-dropdown-item>
                <v-dropdown-item>Something else here</v-dropdown-item>
              </v-dropdown-menu>
            </v-nav-bar-item>
          </v-nav>
        </div>
      </v-nav-bar>
    </example-container>

    <example-container>
      <v-nav-bar inverse>
        <v-nav-bar-toggler-button right></v-nav-bar-toggler-button>
        <v-nav-bar-brand href="#">Navbar</v-nav-bar-brand>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <v-nav navbar>
            <v-nav-bar-item href="#" active>Home <span class="sr-only">(current)</span></v-nav-bar-item>
            <v-nav-bar-item href="#">Link</v-nav-bar-item>
            <v-nav-bar-item href="#" disabled>Disabled</v-nav-bar-item>
          </v-nav>

          <v-form navbar>
            <input class="form-control mr-sm-2" type="text" placeholder="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </v-form>
        </div>
      </v-nav-bar>
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
