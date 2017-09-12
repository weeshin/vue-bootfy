import AnnoyingBackground from './AnnoyingBackground.js';
import Badge from './Badge.js';
import ScrollSpy from './ScrollSpy.js';
import MarkDown from './MarkDown.js';

export default function install(Vue) {
  Vue.directive('annoying-background', AnnoyingBackground);
  Vue.directive('badge', Badge);
  Vue.directive('scrollspy', ScrollSpy);
  Vue.directive('markdown', MarkDown);
}
