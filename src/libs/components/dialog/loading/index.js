import Vue from 'vue';
import BiuLoading from './loading.vue';
import { pageScroll } from '../../../../utils';

const LoadingConstructor = Vue.extend(BiuLoading);

const instance = new LoadingConstructor().$mount();

LoadingConstructor.prototype.close = () => {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
	
	//恢复滚动
	pageScroll.unlock();
};

LoadingConstructor.prototype.open = (options = {}) => {
  instance.type = 'biu-dialog-' + (options.type || 'default');
  instance.mes = options.mes || '';
  instance.direction = 'biu-dialog-' + (options.vertical ? 'vertical' : 'horizontal');
	
  document.body.appendChild(instance.$el);
  
	//禁止滚动
	pageScroll.lock();
};

export default {
	open: instance.open,
  close: instance.close
};