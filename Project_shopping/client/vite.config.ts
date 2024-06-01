import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: '.', // 프로젝트 루트를 client/src로 설정
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
