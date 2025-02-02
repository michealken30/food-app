import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Ensure React plugin is included
  server: {
    host: true,
    port: 8080, // Ensure it matches your frontend service
    strictPort: true
  },
  preview: {
    allowedHosts: ['michealken30.com.ng']
  }
});
