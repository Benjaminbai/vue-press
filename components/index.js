
import BLayout from './bLayout/index.vue'
import BMenu from './bMenu/index.vue'
import BBreadcrumb from './bBreadcrumb/index.vue'
import BGridCard from './bGridCard/index.vue'
import BTitle from './bTitle/index.vue'
import BLayoutHeader from './bLayoutHeader/index.vue'
import BLayoutContent from './bLayoutContent/index.vue'
import BLayoutFooter from './bLayoutFooter/index.vue'
import BButton from './bButton/index.vue'
import BCard from './bCard/index.vue'
import BCheckbox from './bCheckbox/index.vue'
import BAlert from './bAlert/index.vue'
import BSelect from './bSelect/index.vue'
import BRadio from './bRadio/index.vue'
import BInput from './bInput/index.vue'
import BInputSearch from './bInput/search/index.vue'
import BSlider from './bSlider/index.vue'
import BSwitch from './bSwitch/index.vue'
import BTag from './bTag/index.vue'
import BTabs from './bTabs/index.vue'
import BCollapse from './bCollapse/index.vue'
import BStep from './bSteps/index.vue'
import BPlatform from './bPlatformMenu/index.vue'

// code as antdv resource code
import { default as BEmpty } from './empty';



const components = {
    BLayout,
    BMenu,
    BBreadcrumb,
    BGridCard,
    BTitle,
    BLayoutHeader,
    BLayoutContent,
    BLayoutFooter,
    BButton,
    BCard,
    BCheckbox,
    BAlert,
    BSelect,
    BRadio,
    BInput,
    BInputSearch,
    BSlider,
    BSwitch,
    BTag,
    BTabs,
    BCollapse,
    BStep,
    BPlatform,

    BEmpty
}

const install = function (Vue) {
    Object.values(components).forEach(component => {
        Vue.component(component.name, component);
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    install,
    BEmpty,
  };

export default {
    install
}