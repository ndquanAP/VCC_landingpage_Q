import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        gameDesign: 'game-design.html',
        multimedia: 'multimedia.html',
      },
    },
  },
  server: {
    host: true,
    port: 3300,
    // allowedHosts: [
    //   // '91a220a76b7c.ngrok-free.app' // <- Thêm domain của bạn ở đây
    //   '928538df98ee.ngrok-free.app'
    // ]
    allowedHosts: [
      'arrange-buyers-appearing-bandwidth.trycloudflare.com',
      'accessible-upload-blair-solo.trycloudflare.com',
      'retained-packing-off-yoga.trycloudflare.com'
    ]
    
  }
})
