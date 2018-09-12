import './styles/base.scss';

import { Header, Body, Footer, Layout } from './components/layouts';
import { Toast, Alert, Confirm, Loading } from './components/dialog';
import { Button } from './components/button';
import { GridWrap, GridItem } from './components/grid';
import { ListWrap, ListCell } from './components/list';
import { Slider, SliderItem } from './components/slider';
import { BackTop } from './components/backTop';
import { Popup } from './components/popup';
import { Flexbox, FlexboxItem } from './components/flexbox';
import { Preview } from './components/preview';
import { Actionsheet } from './components/actionsheet';
import { Linkage } from './components/linkage';
import { DateSelect } from './components/dateSelect';
import { PullUp, PullDown } from './components/pull';
import { Tab, TabItem } from './components/tab';
import { Swiper, SwiperItem } from './components/swiper';
import { Badge } from './components/badge';
import { Radio, RadioGroup } from './components/radio';
import { Checkbox, CheckboxGroup } from './components/checkbox';
import { Switch } from './components/switch';
import { Icon } from './components/icon';
import { Collapse, CollapseItem } from './components/collapse';
import { Tabbar, TabbarItem } from './components/tabbar';


const install = (Vue) => {
	Vue.component(Header.name, Header);
	Vue.component(Body.name, Body);
	Vue.component(Footer.name, Footer);
	Vue.component(Layout.name, Layout);
	
	Vue.component(Button.name, Button);
	
	Vue.component(GridWrap.name, GridWrap);
	Vue.component(GridItem.name, GridItem);
	
	Vue.component(ListWrap.name, ListWrap);
	Vue.component(ListCell.name, ListCell);
	
	Vue.component(Slider.name, Slider);
	Vue.component(SliderItem.name, SliderItem);
	
	Vue.component(BackTop.name, BackTop);
	
	Vue.component(Popup.name, Popup);
	
	Vue.component(Flexbox.name, Flexbox);
	Vue.component(FlexboxItem.name, FlexboxItem);
	
	Vue.component(Preview.name, Preview);
	
	Vue.component(Actionsheet.name, Actionsheet);
	
	Vue.component(Linkage.name, Linkage);

	Vue.component(DateSelect.name, DateSelect);

	Vue.component(PullUp.name, PullUp);
	Vue.component(PullDown.name, PullDown);
	
	Vue.component(Tab.name, Tab);
	Vue.component(TabItem.name, TabItem);

	Vue.component(Swiper.name, Swiper);
	Vue.component(SwiperItem.name, SwiperItem);

	Vue.component(Badge.name, Badge);

	Vue.component(Radio.name, Radio);
	Vue.component(RadioGroup.name, RadioGroup);

	Vue.component(Checkbox.name, Checkbox);
	Vue.component(CheckboxGroup.name, CheckboxGroup);

	Vue.component(Switch.name, Switch);

	Vue.component(Icon.name, Icon);

	Vue.component(Collapse.name, Collapse);
	Vue.component(CollapseItem.name, CollapseItem);

	Vue.component(Tabbar.name, Tabbar);
	Vue.component(TabbarItem.name, TabbarItem);
	
	Vue.prototype.$dialog = {
		toast: Toast,
		alert: Alert,
		confirm: Confirm,
		loading: Loading
	}
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};