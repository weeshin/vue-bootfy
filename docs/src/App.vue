<template>
  <div>
    <v-nav-bar stickyTop>
      <v-nav-bar-toggler-button right></v-nav-bar-toggler-button>
      <v-nav-bar-brand href="#">
        <img src="/assets/bootstrap-solid.svg" width="30" height="30" alt="">
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
            <a class="list-group-item list-group-item-action" href="/#/components/alert">Alerts</a>
            <a class="list-group-item list-group-item-action" href="/#/components/badge">Badges</a>
            <a class="list-group-item list-group-item-action" href="/#/components/breadcrumb">Breadcrumb</a>
            <a class="list-group-item list-group-item-action" href="/#/components/button">Buttons</a>
            <a class="list-group-item list-group-item-action" href="/#/components/button-group">Button Group</a>
            <a class="list-group-item list-group-item-action" href="/#/components/card">Card</a>
            <a class="list-group-item list-group-item-action" href="/#/components/code">Code</a>
            <a class="list-group-item list-group-item-action" href="/#/components/dropdown">Dropdown</a>
            <a class="list-group-item list-group-item-action" href="/#/components/forms">Forms</a>
            <a class="list-group-item list-group-item-action" href="/#/components/grid">Grid</a>
            <a class="list-group-item list-group-item-action" href="/#/components/inputgroup">InputGroup</a>
            <a class="list-group-item list-group-item-action" href="/#/components/jumbotron">Jumbotron</a>
            <a class="list-group-item list-group-item-action" href="/#/components/listgroup">ListGroup</a>
            <a class="list-group-item list-group-item-action" href="/#/components/modal">Modal</a>
            <a class="list-group-item list-group-item-action" href="/#/components/nav">Nav</a>
            <a class="list-group-item list-group-item-action" href="/#/components/navbar">NavBar</a>
            <a class="list-group-item list-group-item-action" href="/#/components/pagination">Pagination</a>
            <a class="list-group-item list-group-item-action" href="/#/components/popovers">Popovers</a>
            <a class="list-group-item list-group-item-action" href="/#/components/progress">Progress</a>
            <a class="list-group-item list-group-item-action" href="/#/components/scrollspy">Scrollspy</a>
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
