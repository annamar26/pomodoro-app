/* eslint-disable import/prefer-default-export */
import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';

export const mount = (element:string): void => {
  createApp(App).mount(element);
};
mount('#app');
