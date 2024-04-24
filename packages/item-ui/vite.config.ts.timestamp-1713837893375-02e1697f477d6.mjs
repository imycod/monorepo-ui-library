// vite.config.ts
import { defineConfig } from "file:///C:/Users/31700/Desktop/unisc-ui/node_modules/.pnpm/vite@5.2.8_sass@1.75.0/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/31700/Desktop/unisc-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.8_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///C:/Users/31700/Desktop/unisc-ui/node_modules/.pnpm/vite-plugin-dts@3.8.2_typescript@5.4.5_vite@5.2.8/node_modules/vite-plugin-dts/dist/index.mjs";
import path from "path";
import AutoImport from "file:///C:/Users/31700/Desktop/unisc-ui/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.9.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/31700/Desktop/unisc-ui/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///C:/Users/31700/Desktop/unisc-ui/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/resolvers.js";
import Icons from "file:///C:/Users/31700/Desktop/unisc-ui/node_modules/.pnpm/unplugin-icons@0.18.5/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///C:/Users/31700/Desktop/unisc-ui/node_modules/.pnpm/unplugin-icons@0.18.5/node_modules/unplugin-icons/dist/resolver.js";
var __vite_injected_original_dirname = "C:\\Users\\31700\\Desktop\\unisc-ui\\packages\\item-ui";
var pathSrc = path.resolve(__vite_injected_original_dirname, "src");
var vite_config_default = defineConfig({
  build: {
    rollupOptions: {
      // 告诉rollup这两个是外部依赖，不要打包进库
      external: ["element-plus", "vue"]
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
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "item-ui",
      formats: ["es", "cjs"],
      fileName: "index"
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  resolve: {
    alias: {
      "@": pathSrc,
      "~/": `${pathSrc}/`
    }
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
      imports: ["vue"],
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon"
        })
      ],
      dts: path.resolve(pathSrc, "auto-imports.d.ts")
    }),
    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"]
        }),
        ElementPlusResolver()
      ],
      dts: path.resolve(pathSrc, "components.d.ts")
    }),
    Icons({
      autoInstall: true
    }),
    dts()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwzMTcwMFxcXFxEZXNrdG9wXFxcXHVuaXNjLXVpXFxcXHBhY2thZ2VzXFxcXGl0ZW0tdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDMxNzAwXFxcXERlc2t0b3BcXFxcdW5pc2MtdWlcXFxccGFja2FnZXNcXFxcaXRlbS11aVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvMzE3MDAvRGVza3RvcC91bmlzYy11aS9wYWNrYWdlcy9pdGVtLXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSc7XHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnO1xyXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJztcclxuaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnO1xyXG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tICd1bnBsdWdpbi1pY29ucy9yZXNvbHZlcic7XHJcbi8vIGh0dHBzOi8vanVlamluLmNuL3Bvc3QvNzA0NDEwNDQwNTgyNTYxNzkyOCBJY29ucyBXZWJwYWNrIFBsdWdpblxyXG5jb25zdCBwYXRoU3JjID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAvLyBcdTU0NEFcdThCQzlyb2xsdXBcdThGRDlcdTRFMjRcdTRFMkFcdTY2MkZcdTU5MTZcdTkwRThcdTRGOURcdThENTZcdUZGMENcdTRFMERcdTg5ODFcdTYyNTNcdTUzMDVcdThGREJcdTVFOTNcclxuICAgICAgZXh0ZXJuYWw6IFsnZWxlbWVudC1wbHVzJywgJ3Z1ZSddLFxyXG4gICAgICAvLyBvdXRwdXQ6IFtcclxuICAgICAgLy8gICB7XHJcbiAgICAgIC8vICAgICBwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXHJcbiAgICAgIC8vICAgICBwcmVzZXJ2ZU1vZHVsZXNSb290OiAnc3JjJyxcclxuICAgICAgLy8gICAgIGVudHJ5RmlsZU5hbWVzOiAnLi9kaXN0L1tuYW1lXS5qcycsXHJcbiAgICAgIC8vICAgICBmb3JtYXQ6ICdlc20nLFxyXG4gICAgICAvLyAgICAgZGlyOiAnZXMnLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vICAge1xyXG4gICAgICAvLyAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxyXG4gICAgICAvLyAgICAgcHJlc2VydmVNb2R1bGVzUm9vdDogJ3NyYycsXHJcbiAgICAgIC8vICAgICBlbnRyeUZpbGVOYW1lczogJy4vZGlzdC9bbmFtZV0uanMnLFxyXG4gICAgICAvLyAgICAgZm9ybWF0OiAnY2pzJyxcclxuICAgICAgLy8gICAgIGV4cG9ydHM6ICduYW1lZCcsXHJcbiAgICAgIC8vICAgICBkaXI6ICdsaWInLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vIF0sXHJcbiAgICB9LFxyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksXHJcbiAgICAgIG5hbWU6ICdpdGVtLXVpJyxcclxuICAgICAgZm9ybWF0czogWydlcycsICdjanMnXSxcclxuICAgICAgZmlsZU5hbWU6ICdpbmRleCcsXHJcbiAgICB9LFxyXG4gICAgdGVyc2VyT3B0aW9uczoge1xyXG4gICAgICBjb21wcmVzczoge1xyXG4gICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcclxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcGF0aFNyYyxcclxuICAgICAgJ34vJzogYCR7cGF0aFNyY30vYCxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyBjc3M6IHtcclxuICAvLyAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAvLyAgICAgc2Nzczoge1xyXG4gIC8vICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQHVzZSBcIn4vYXNzZXRzL3N0eWxlcy9lbGVtZW50L2luZGV4LnNjc3NcIiBhcyAqO2AsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9LFxyXG4gIC8vIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgLy8gQXV0byBpbXBvcnQgZnVuY3Rpb25zIGZyb20gVnVlLCBlLmcuIHJlZiwgcmVhY3RpdmUsIHRvUmVmLi4uXHJcbiAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NSBWdWUgXHU3NkY4XHU1MTczXHU1MUZEXHU2NTcwXHVGRjBDXHU1OTgyXHVGRjFBcmVmLCByZWFjdGl2ZSwgdG9SZWYgXHU3QjQ5XHJcbiAgICAgIGltcG9ydHM6IFsndnVlJ10sXHJcbiAgICAgIHJlc29sdmVyczogW1xyXG4gICAgICAgIEVsZW1lbnRQbHVzUmVzb2x2ZXIoKSxcclxuICAgICAgICAvLyBBdXRvIGltcG9ydCBpY29uIGNvbXBvbmVudHNcclxuICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcdTU2RkVcdTY4MDdcdTdFQzRcdTRFRjZcclxuICAgICAgICBJY29uc1Jlc29sdmVyKHtcclxuICAgICAgICAgIHByZWZpeDogJ0ljb24nLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICBdLFxyXG4gICAgICBkdHM6IHBhdGgucmVzb2x2ZShwYXRoU3JjLCAnYXV0by1pbXBvcnRzLmQudHMnKSxcclxuICAgIH0pLFxyXG4gICAgQ29tcG9uZW50cyh7XHJcbiAgICAgIHJlc29sdmVyczogW1xyXG4gICAgICAgIC8vIEF1dG8gcmVnaXN0ZXIgaWNvbiBjb21wb25lbnRzXHJcbiAgICAgICAgLy8gXHU4MUVBXHU1MkE4XHU2Q0U4XHU1MThDXHU1NkZFXHU2ODA3XHU3RUM0XHU0RUY2XHJcbiAgICAgICAgSWNvbnNSZXNvbHZlcih7XHJcbiAgICAgICAgICBlbmFibGVkQ29sbGVjdGlvbnM6IFsnZXAnXSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBFbGVtZW50UGx1c1Jlc29sdmVyKCksXHJcbiAgICAgIF0sXHJcbiAgICAgIGR0czogcGF0aC5yZXNvbHZlKHBhdGhTcmMsICdjb21wb25lbnRzLmQudHMnKSxcclxuICAgIH0pLFxyXG4gICAgSWNvbnMoe1xyXG4gICAgICBhdXRvSW5zdGFsbDogdHJ1ZSxcclxuICAgIH0pLFxyXG4gICAgZHRzKCksXHJcbiAgXSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1YsU0FBUyxvQkFBb0I7QUFDN1csT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFDakIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFDcEMsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sbUJBQW1CO0FBUjFCLElBQU0sbUNBQW1DO0FBVXpDLElBQU0sVUFBVSxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUc3QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVUsQ0FBQyxnQkFBZ0IsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWtCbEM7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUM3QyxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLGVBQWU7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxNQUFNLEdBQUcsT0FBTztBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUE7QUFBQTtBQUFBLE1BR1QsU0FBUyxDQUFDLEtBQUs7QUFBQSxNQUNmLFdBQVc7QUFBQSxRQUNULG9CQUFvQjtBQUFBO0FBQUE7QUFBQSxRQUdwQixjQUFjO0FBQUEsVUFDWixRQUFRO0FBQUEsUUFDVixDQUFDO0FBQUEsTUFDSDtBQUFBLE1BQ0EsS0FBSyxLQUFLLFFBQVEsU0FBUyxtQkFBbUI7QUFBQSxJQUNoRCxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXO0FBQUE7QUFBQTtBQUFBLFFBR1QsY0FBYztBQUFBLFVBQ1osb0JBQW9CLENBQUMsSUFBSTtBQUFBLFFBQzNCLENBQUM7QUFBQSxRQUNELG9CQUFvQjtBQUFBLE1BQ3RCO0FBQUEsTUFDQSxLQUFLLEtBQUssUUFBUSxTQUFTLGlCQUFpQjtBQUFBLElBQzlDLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxNQUNKLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxFQUNOO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
