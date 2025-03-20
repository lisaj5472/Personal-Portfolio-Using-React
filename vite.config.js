import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      external: ['/src/assets/styles.css'],
      external: ['/src/assets/images/headShot.jpg'],
      external: ['/src/assets/logo.png'],
      external: ['/src/assets/docs/lj-full-resume.pdf'],
      external: ['src/assets/images/blog.png'],
      external: ['src/assets/images/CSSsnipperCheatsheet.png'],
      external: ['src/assets/images/digest.png'], 
      external: ['src/assets/images/firstPortfolio.png'],
      external: ['src/assets/docs/lj-full-resume.pdf'],
       },
}
});
