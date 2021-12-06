// // vite.config.js
// const { resolve } = require('path')
// const { defineConfig } = require('vite')


// const root = resolve(__dirname, 'src')
// const outDir = resolve(__dirname, 'dist')


// module.exports = defineConfig({
//   build: {
//       outDir,
//       emptyOutDir: true,

//     rollupOptions: {
//         input: {
//             main: resolve('index.html'),
//             about: resolve(root, 'about', 'index.html')
//       }
//     }
//   }
// })

// vite.config.js
const { resolve } = require('path')
import { defineConfig } from 'vite'
const path = require('path')

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

module.exports = defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about', 'index.html'),
        privacy: resolve(root, 'privacy', 'index.html') 
      }
    }
  }
})

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import path from 'path'

// export default defineConfig({
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// })