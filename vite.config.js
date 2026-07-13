import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function copyAssetsPlugin() {
  return {
    name: 'copy-assets-plugin',
    closeBundle() {
      const srcDir = path.resolve(__dirname, 'src/v2/assets');
      const destDir = path.resolve(__dirname, 'dist/src/v2/assets');
      
      const copyDir = (src, dest) => {
        if (!fs.existsSync(src)) return;
        fs.mkdirSync(dest, { recursive: true });
        const entries = fs.readdirSync(src, { withFileTypes: true });
        for (let entry of entries) {
          const srcPath = path.join(src, entry.name);
          const destPath = path.join(dest, entry.name);
          if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
        }
      };
      
      console.log('Copying src/v2/assets to dist/src/v2/assets...');
      copyDir(srcDir, destDir);
      console.log('Assets copied successfully!');
    }
  }
}

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: './', // Deploying to ROOT maps to the root url context '/'
  plugins: [react(), copyAssetsPlugin()],
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
    allowedHosts: [
      'arrange-buyers-appearing-bandwidth.trycloudflare.com',
      'accessible-upload-blair-solo.trycloudflare.com',
      'retained-packing-off-yoga.trycloudflare.com'
    ]
  }
}))
