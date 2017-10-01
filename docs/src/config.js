import Vue from 'vue';
import VueBootfy from '../../src';
import 'bootstrap/dist/css/bootstrap.css';
// import 'prismjs/themes/prism.css';
// import 'prismjs/themes/prism-coy.css';
// import 'prismjs/themes/prism-dark.css';
// import 'prismjs/themes/prism-funky.css';
// import 'prismjs/themes/prism-okaidia.css';
// import 'prismjs/themes/prism-solarizedlight.css';
// import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/themes/prism-twilight.css';

import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.css';

import 'prismjs/plugins/highlight-keywords/prism-highlight-keywords.js';

// import './js/prismjsConfig';

Vue.use(VueBootfy);
Vue.config.devtools = true;
