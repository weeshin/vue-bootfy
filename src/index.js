import vAlert from './components/vAlert';
import vBadge from './components/vBadge';
import vBreadcrumb from './components/vBreadcrumb';
import vButton from './components/vButton';
import vButtonGroup from './components/vButtonGroup';
import vCard from './components/vCard';
import vDropdown from './components/vDropdown';
import vForm from './components/vForm';
import vInputGroup from './components/vInputGroup';
import vJumbotron from './components/vJumbotron';
import vListGroup from './components/vListGroup';
import vModal from './components/vModal';
import vNav from './components/vNav';
import vPagination from './components/vPagination';
import vProgress from './components/vProgress';
import vTooltips from './components/vTooltips';

const options = {
  vAlert,
  vBadge,
  vBreadcrumb,
  vButton,
  vButtonGroup,
  vCard,
  vDropdown,
  vForm,
  vInputGroup,
  vJumbotron,
  vListGroup,
  vModal,
  vNav,
  vPagination,
  vProgress,
  vTooltips
};

options.install = (Vue) => {
  for (let component in options) {
    const componentInstaller = options[component];

    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller);
    }
  }
};

export default options;
