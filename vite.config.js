import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }
    })
  ],
  resolve: {
    alias: {
      'vue': '@vue/compat',
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: true,
    port: 8081
  },
  envPrefix: 'VUE_APP_'
})
