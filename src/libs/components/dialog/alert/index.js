import Vue from 'vue';
import BiuAlert from './alert.vue';
import { pageScroll } from '../../../../utils';

const AlertConstructor = Vue.extend(BiuAlert);

const instance = new AlertConstructor().$mount();

AlertConstructor.prototype.closeAlert = function () {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
	
	//恢复滚动
	pageScroll.unlock();
	
  typeof this.callback === 'function' && this.callback();
};

const Alert = (options = {}) => {
	instance.type = 'biu-' + (options.type || 'default');
  instance.title = options.title || '提示';
  instance.mes = options.mes;
  instance.buttonText = options.buttonText || '确定';
  instance.callback = options.callback;
	
  document.body.appendChild(instance.$el);
  
	//禁止滚动
	pageScroll.lock();
	
};

export default Alert;