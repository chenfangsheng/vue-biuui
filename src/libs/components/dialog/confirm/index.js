import Vue from 'vue';
import BiuConfirm from './confirm.vue';
import { pageScroll } from '../../../../utils';

const ConfirmConstructor = Vue.extend(BiuConfirm);

const instance = new ConfirmConstructor().$mount();

ConfirmConstructor.prototype.closeConfirm = function () {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
	
	//恢复滚动
	pageScroll.unlock();
};

ConfirmConstructor.prototype.runCallback = function () {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
	
	//恢复滚动
	pageScroll.unlock();
	
	if(this.edit){
		let data = { data: this.mes };
		typeof this.callback === 'function' && this.callback(data);
	}else{
		typeof this.callback === 'function' && this.callback();
	}
  	
};

const Confirm = (options = {}) => {
	instance.type = 'biu-' + (options.type || 'default');
  instance.title = options.title || '提示';
  instance.mes = options.mes || '';
  instance.edit = options.edit || false;
  instance.inputType = options.inputType || 'text';
  instance.placeholder = options.placeholder || '请输入...';
  instance.callback = options.callback;
	
  document.body.appendChild(instance.$el);
  
	//禁止滚动
	pageScroll.lock();
	
};

export default Confirm;