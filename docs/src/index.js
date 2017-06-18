import Vue from 'vue';
import VueRouter from 'vue-router';

import './config.js';
import routes from './routes.js';
import App from './App';

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'hash',
  base: window.location.pathname,
  routes
});

let Docs = Vue.component('app', App);

new Docs({
  el: '#app',
  router
});
