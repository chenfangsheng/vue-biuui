import Vue from 'vue';
import BiuToast from './toast.vue';
import { pageScroll } from '../../../../utils';

const ToastConstructor = Vue.extend(BiuToast);

const instance = new ToastConstructor().$mount();

ToastConstructor.prototype.closeToast = function () {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
	
	//恢复滚动
	pageScroll.unlock();
	
  typeof this.callback === 'function' && this.callback();
};

const Toast = (options = {}) => {
  instance.type = 'biu-dialog-' + (options.type || 'default');
  instance.mes = options.mes;
  instance.icon = options.icon;
  instance.timeout = ~~options.timeout || 2000;
  instance.callback = options.callback;
	
  document.body.appendChild(instance.$el);
  
	//禁止滚动
	pageScroll.lock();
	
  const timer = setTimeout(() => {
    clearTimeout(timer);
    instance.closeToast();
  }, instance.timeout + 100);
};

export default Toast;