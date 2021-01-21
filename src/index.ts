import './index.css';
import HelloWorld from './components/HelloWorld.vue';

const install = (Vue: any) => {
  Vue.component(HelloWorld.name, HelloWorld);
};
export default {
  install,
  HelloWorld
};
