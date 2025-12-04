import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
// import react from '@vitejs/plugin-vite'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), tailwindcss()],
})
