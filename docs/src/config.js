import Vue from 'vue';
import VueBootfy from '../../src';
import 'bootstrap/dist/css/bootstrap.css';
import 'prismjs/themes/prism.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import './js/prismjsConfig';

Vue.use(VueBootfy);
Vue.config.devtools = true;
