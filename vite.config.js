import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {

      "/api": "http://localhost:3535",
      "/propertyUploads": "http://localhost:3535",
      "/blogUploads": "http://localhost:3535",
      // "/api": "https://dev-api.warebase.com.ng",
      // "/propertyUploads": "https://dev-api.warebase.com.ng",
      // "/blogUploads": "https://dev-api.warebase.com.ng",

      // "/api": "http://localhost:3535",
      // "/propertyUploads": "http://localhost:3535",
      // "/blogUploads": "http://localhost:3535",
      "/api": "https://dev-api.warebase.com.ng",
      "/propertyUploads": "https://dev-api.warebase.com.ng",
      "/blogUploads": "https://dev-api.warebase.com.ng",

    },
  },
});


