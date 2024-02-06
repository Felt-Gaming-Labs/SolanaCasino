import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const ENV_PREFIX = ['VITE_'];

export default defineConfig(() => ({
  envPrefix: ENV_PREFIX,
  server: {
    port: 4001,
    host: true,  // Set to true to listen on all network interfaces
  },
  assetsInclude: ["**/*.glb"],
  define: { 'process.env.ANCHOR_BROWSER': true },
  plugins: [
    react({ jsxRuntime: 'classic' }),
  ],
}));
