import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // lib: {
    //   entry: path.resolve(__dirname, 'src/packages/index.js'),  // 打包入口文件
    //   name: 'vue3-google-facebook-signin',    // 打包的名字
    //   fileName: (format) => `vue3-google-facebook-signin.${format}.js`  // 打包生成的文件名
    // },
    rollupOptions: {
      // 不需要打包进库的依赖，忽略vue
      external: ['vue'],
      output: {
        // UMD构建模式下为这些外部的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
