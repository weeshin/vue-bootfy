<template>
  <div class="container-fluid">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Navbar</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <div class="row">
      <div class="col col-sm-10 col-md-10 ">
        <router-view></router-view>
      </div>
      <div class="col col-sm-2 col-md-2">
        <ul class="list-group">
          <a class="list-group-item list-group-item-action" href="/#/components/alert">Alerts</a>
          <a class="list-group-item list-group-item-action" href="/#/components/badge">Badges</a>
          <a class="list-group-item list-group-item-action" href="/#/components/breadcrumb">Breadcrumb</a>
          <a class="list-group-item list-group-item-action" href="/#/components/button">Buttons</a>
          <a class="list-group-item list-group-item-action" href="/#/components/button-group">Button Group</a>
          <a class="list-group-item list-group-item-action" href="/#/components/card">Card</a>
          <a class="list-group-item list-group-item-action" href="/#/components/dropdown">Dropdown</a>
          <a class="list-group-item list-group-item-action" href="/#/components/forms">Forms</a>
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

</template>

<script>

  export default {

  };
</script>
