import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
    }),
  ],
  assetsInclude: ['**/*.PNG', '**/*.png'],
  server: {
    port: 5173, // Порт, который уже используется (по умолчанию для Vite)
    host: '0.0.0.0', // Это позволяет Vite принимать подключения извне контейнера
  },
});