import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import react from '@vitejs/plugin-react';
import jadePlugin from './vite-jade-plugin';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      rollupOptions: {
        external: [
          'sqlite3',
          'pg',
          'pg-native',
          'tedious',
          'mysql',
          'mysql2',
          'oracledb'
        ]
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
      },
    },
    plugins: [jadePlugin(), react()],
  },
});
