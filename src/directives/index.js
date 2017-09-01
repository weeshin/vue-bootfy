import AnnoyingBackground from './AnnoyingBackground.js';
import ScrollSpy from './ScrollSpy.js';

export default function install(Vue) {
  Vue.directive('annoying-background', AnnoyingBackground);
  Vue.directive('scrollspy', ScrollSpy);
}
