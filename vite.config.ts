import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { dependencies } from './package.json';

const packagesChunks = [
  'antd',
  '@fortawesome/fontawesome-svg-core',
  '@fortawesome/react-fontawesome'
];

const buildManualChunks = () => {
  const chunks: Record<string, string[]> = {};
  Object.keys(dependencies).forEach((key) => {
    if (packagesChunks.includes(key)) chunks[key] = [key];
  });
  return chunks;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/finance-dashboard',
  build: {
    chunkSizeWarningLimit: 1500,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: buildManualChunks()
      }
    }
  },
});
