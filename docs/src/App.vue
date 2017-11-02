<template>
  <div>
    <v-nav-bar stickyTop>
      <v-nav-bar-toggler-button right></v-nav-bar-toggler-button>
      <v-nav-bar-brand href="#">
        <img src="assets/bootstrap-solid.svg" width="30" height="30" alt="Vue-Bootify">
        Vue-Bootify
      </v-nav-bar-brand>
    </v-nav-bar>

    <div class="container-fluid">
      <div class="row flex-xl-nowrap2">
        <div class="col col-sm-10 col-md-10 ">
          <router-view></router-view>
        </div>
        <div class="col col-sm-2 col-md-2 doc-sidebar">
          <ul class="list-group">
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/alert">Alerts</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/badge">Badges</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/breadcrumb">Breadcrumb</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/button">Buttons</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/button-group">Button Group</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/card">Card</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/code">Code</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/dropdown">Dropdown</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/forms">Forms</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/formradio">FormRadio</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/grid">Grid</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/inputgroup">InputGroup</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/jumbotron">Jumbotron</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/listgroup">ListGroup</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/modal">Modal</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/nav">Nav</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/navbar">NavBar</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/pagination">Pagination</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/popovers">Popovers</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/progress">Progress</router-link>
            </li>
            <li class="list-group-item list-group-item-action">
              <router-link exact to="/components/scrollspy">Scrollspy</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {

  };
</script>

<style scoped>
.doc-sidebar {
  position: sticky;
  top: 4rem;
  z-index: 1000;
  max-height: calc(100vh - 4rem);
  overflow: scroll;
}
</style>
