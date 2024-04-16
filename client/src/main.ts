import {createApp} from 'vue';

import "~/styles/style.css";
import "~/styles/index.scss";

import App from './App.vue';

import router from "./routers"

createApp(App).use(router).mount('#app');
