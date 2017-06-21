const Alert = (r) => require.ensure([], () => r(require('./pages/components/Alert')), 'alert');
const Badge = (r) => require.ensure([], () => r(require('./pages/components/Badge')), 'badge');
const Breadcrumb = (r) => require.ensure([], () => r(require('./pages/components/Breadcrumb')), 'breadcrumb');
const Button = (r) => require.ensure([], () => r(require('./pages/components/Button')), 'button');
const ButtonGroup = (r) => require.ensure([], () => r(require('./pages/components/ButtonGroup')), 'buttonGroup');
const Card = (r) => require.ensure([], () => r(require('./pages/components/Card')), 'card');
const Modal = (r) => require.ensure([], () => r(require('./pages/components/Modal')), 'modal');
const Nav = (r) => require.ensure([], () => r(require('./pages/components/Nav')), 'nav');
const Pagination = (r) => require.ensure([], () => r(require('./pages/components/Pagination')), 'pagination');
const Progress = (r) => require.ensure([], () => r(require('./pages/components/Progress')), 'progress');

const main = [];

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
    path: '/components/pagination',
    name: 'components:pagination',
    component: Pagination
  },
  {
    path: '/components/progress',
    name: 'components:progress',
    component: Progress
  }
];

export default [].concat(main, components);
