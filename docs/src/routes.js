const Home = (r) => require.ensure([], () => r(require('./pages/Home')), 'home');

const Alert = (r) => require.ensure([], () => r(require('./pages/components/alert/Alert')), 'alert');
const Badge = (r) => require.ensure([], () => r(require('./pages/components/badge/Badge')), 'badge');
const Breadcrumb = (r) => require.ensure([], () => r(require('./pages/components/breadcrumb/Breadcrumb')), 'breadcrumb');
const Button = (r) => require.ensure([], () => r(require('./pages/components/button/Button')), 'button');
const ButtonGroup = (r) => require.ensure([], () => r(require('./pages/components/buttonGroup/ButtonGroup')), 'buttonGroup');
const Card = (r) => require.ensure([], () => r(require('./pages/components/card/Card')), 'card');
const Code = (r) => require.ensure([], () => r(require('./pages/components/code/Code')), 'code');
const Dropdown = (r) => require.ensure([], () => r(require('./pages/components/dropdown/Dropdown')), 'dropdown');
const Forms = (r) => require.ensure([], () => r(require('./pages/components/forms/Forms')), 'forms');
const Grid = (r) => require.ensure([], () => r(require('./pages/components/grid/Grid')), 'grid');
const InputGroup = (r) => require.ensure([], () => r(require('./pages/components/inputGroup/InputGroup')), 'inputGroup');
const Jumbotron = (r) => require.ensure([], () => r(require('./pages/components/jumbotron/Jumbotron')), 'jumbotron');
const ListGroup = (r) => require.ensure([], () => r(require('./pages/components/listGroup/ListGroup')), 'listGroup');
const Modal = (r) => require.ensure([], () => r(require('./pages/components/modal/Modal')), 'modal');
const Nav = (r) => require.ensure([], () => r(require('./pages/components/nav/Nav')), 'nav');
const NavBar = (r) => require.ensure([], () => r(require('./pages/components/navbar/NavBar')), 'navBar');
const Pagination = (r) => require.ensure([], () => r(require('./pages/components/pagination/Pagination')), 'pagination');
const Popovers = (r) => require.ensure([], () => r(require('./pages/components/Popovers')), 'popovers');
const Scrollspy = (r) => require.ensure([], () => r(require('./pages/components/Scrollspy')), 'scrollspy');
const Progress = (r) => require.ensure([], () => r(require('./pages/components/Progress')), 'progress');

const main = [
  {
    path: '/',
    name: 'main:home',
    component: Home
  }
];

const components = [
  {
    path: '/components/alert',
    name: 'components:alert',
    component: Alert
  },
  {
    path: '/components/badge',
    name: 'components:badge',
    component: Badge
  },
  {
    path: '/components/breadcrumb',
    name: 'components:breadcrumb',
    component: Breadcrumb
  },
  {
    path: '/components/button',
    name: 'components:button',
    component: Button
  },
  {
    path: '/components/button-group',
    name: 'components:buttonGroup',
    component: ButtonGroup
  },
  {
    path: '/components/card',
    name: 'components:card',
    component: Card
  },
  {
    path: '/components/code',
    name: 'components:code',
    component: Code
  },
  {
    path: '/components/dropdown',
    name: 'components:dropdown',
    component: Dropdown
  },
  {
    path: '/components/forms',
    name: 'components:forms',
    component: Forms
  },
  {
    path: '/components/grid',
    name: 'components:grid',
    component: Grid
  },
  { path: '/components/inputgroup', name: 'components:inputgroup', component: InputGroup },
  { path: '/components/jumbotron', name: 'components:jumbotron', component: Jumbotron },
  { path: '/components/listgroup', name: 'components:listgroup', component: ListGroup },
  {
    path: '/components/modal',
    name: 'components:modal',
    component: Modal
  },
  {
    path: '/components/nav',
    name: 'components:nav',
    component: Nav
  },
  {
    path: '/components/navbar',
    name: 'components:navbar',
    component: NavBar
  },
  {
    path: '/components/pagination',
    name: 'components:pagination',
    component: Pagination
  },
  {
    path: '/components/popovers',
    name: 'components:popovers',
    component: Popovers
  },
  {
    path: '/components/scrollspy',
    name: 'components:scrollspy',
    component: Scrollspy
  },
  {
    path: '/components/progress',
    name: 'components:progress',
    component: Progress
  }
];

export default [].concat(main, components);
