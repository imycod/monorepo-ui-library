// @ts-nocheck
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// import AutoImport from "unplugin-auto-import/vite"
// import ElementPlus from "unplugin-element-plus/vite"

const pathSrc = path.resolve(__dirname, 'src')
export default defineConfig({
    resolve: {
        alias: {
            '~/': `${pathSrc}/`,
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "~/styles/element/index.scss" as *;`,
            },
        },
    },
    plugins: [
        vue(),
        Components({
            extensions: ['vue'],
            include: [/\.vue$/, /\.vue\?vue/],
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass',
                }),
            ],
            dts: 'src/components.d.ts',
        }),
    ],
})
