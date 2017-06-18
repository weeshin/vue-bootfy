import vAlert from './components/vAlert';
import vBadge from './components/vBadge';
import vBreadcrumb from './components/vBreadcrumb';
import vButton from './components/vButton';
import vButtonGroup from './components/vButtonGroup';
import vCard from './components/vCard';
import vProgress from './components/vProgress';
import vTooltips from './components/vTooltips';

const options = {
  vAlert,
  vBadge,
  vBreadcrumb,
  vButton,
  vButtonGroup,
  vCard,
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
