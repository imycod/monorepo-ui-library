import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
// https://juejin.cn/post/7044104405825617928 Icons Webpack Plugin
const pathSrc = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			// 告诉rollup这两个是外部依赖，不要打包进库
			external: ['element-plus', 'vue'],
			output:{
				globals:{
					vue:'Vue'
				}
			},
			// output: [
			//   {
			//     preserveModules: true,
			//     preserveModulesRoot: 'src',
			//     entryFileNames: './dist/[name].js',
			//     format: 'esm',
			//     dir: 'es',
			//   },
			//   {
			//     preserveModules: true,
			//     preserveModulesRoot: 'src',
			//     entryFileNames: './dist/[name].js',
			//     format: 'cjs',
			//     exports: 'named',
			//     dir: 'lib',
			//   },
			// ],
		},
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'item-ui',
			formats: ['es', 'cjs', 'umd'],
			fileName: (format) => `item-ui.${format}.js`,
		},
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
	},
	resolve: {
		alias: {
			'@': pathSrc,
			'~/': `${pathSrc}/`,
		},
	},
	// css: {
	//   preprocessorOptions: {
	//     scss: {
	//       additionalData: `@use "~/assets/styles/element/index.scss" as *;`,
	//     },
	//   },
	// },
	plugins: [
		vue(),
		AutoImport({
			// Auto import functions from Vue, e.g. ref, reactive, toRef...
			// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
			imports: ['vue'],
			resolvers: [
				ElementPlusResolver(),
				// Auto import icon components
				// 自动导入图标组件
				IconsResolver({
					prefix: 'Icon',
				}),
			],
			dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
		}),
		Components({
			resolvers: [
				// Auto register icon components
				// 自动注册图标组件
				IconsResolver({
					enabledCollections: ['ep'],
				}),
				ElementPlusResolver(),
			],
			dts: path.resolve(pathSrc, 'components.d.ts'),
		}),
		Icons({
			autoInstall: true,
		}),
		dts(),
	],
});
