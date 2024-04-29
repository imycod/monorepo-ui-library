import "./assets/iconfont/iconfont.css";
import './assets/styles/index.css';
// import './assets/styles/element/reset.scss'

import {forEach} from "lodash-es"
import {App} from "vue/dist/vue";

import * as componnets from "./src/index.ts"

export default {
	install: (app: App) => {
		forEach(componnets, (component) => {
			app.component(component.name, component);
		})
	},
};

export {
	componnets
}