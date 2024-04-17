# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.



### 起步
```
pnpm install

```
cd /client
```
pnpm add @unisc-ui/item
```
then
```
pnpm run dev
```
or /item-web-nice-mug
```
pnpm i
pnpm run dev
```

### Dev

手动安装
```
pnpm client add @unisc-ui/item@workspace
```
并行执行，打包packages/item
```
pnpm dev 
```
组件编写完最后
cd packages/item
```
pnpm build or npm build
```

### Use
```
npm install @unisc-ui/item

import { ItemMenu } from '@unisc-ui/item'
import "@unisc-ui/item/dist/style.css"


<item-menu :data="[]" ...args></item-menu>
```

### Api 文档
Item_Ship Web 公共组件集成 - Menu
https://wiki.logisticsteam.com/pages/viewpage.action?pageId=88778429

----
author:
npm: wuxingshi
npm email: wuxingshi97@gmail.com
npm public: https://www.npmjs.com/search?q=%40unisc-ui


图标库：iconify/vue 

