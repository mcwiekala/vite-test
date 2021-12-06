// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about', 'index.html'),
        privacy: resolve(__dirname, 'privacy', 'index.html'),
        start: resolve(__dirname, 'start', 'index.html'),
      }
    }
  }
})