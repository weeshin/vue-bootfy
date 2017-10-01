import vAlert from './components/vAlert';
import vBadge from './components/vBadge';
import vBreadcrumb from './components/vBreadcrumb';
import vButton from './components/vButton';
import vButtonGroup from './components/vButtonGroup';
import vCard from './components/vCard';
import vCode from './components/vCode';
import vDropdown from './components/vDropdown';
import vForm from './components/vForm';
import vGrid from './components/vGrid';
import vInputGroup from './components/vInputGroup';
import vJumbotron from './components/vJumbotron';
import vListGroup from './components/vListGroup';
import vModal from './components/vModal';
import vNav from './components/vNav';
import vNavBar from './components/vNavBar';
import vPagination from './components/vPagination';
import vPopover from './components/vPopover';
import vProgress from './components/vProgress';
import vTooltips from './components/vTooltips';
import Directives from './directives';

import Prism from 'prismjs';

const options = {
  vAlert,
  vBadge,
  vBreadcrumb,
  vButton,
  vButtonGroup,
  vCard,
  vCode,
  vDropdown,
  vForm,
  vGrid,
  vInputGroup,
  vJumbotron,
  vListGroup,
  vModal,
  vNav,
  vNavBar,
  vPagination,
  vPopover,
  vProgress,
  vTooltips
};

const directives = {
  Directives
};

options.install = (Vue) => {
  for (let component in options) {
    const componentInstaller = options[component];

    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller);
    }
  }

  for (let directive in directives) {
    Vue.use(directives[directive]);
  }

  Vue.mixin({
    mounted() {
      Prism.highlightAll();
    }
  });
};

export default options;
