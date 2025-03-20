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
      external: ['/src/assets/styles.css', '/src/assets/images/headShot.jpg', 'src/assets/images/blog.png', 'src/assets/images/CSSsnippetCheatsheet.png', 'src/assets/images/digest.png', 'src/assets/images/firstPortfolio.png', 'src/assets/docs/lj-full-resume.pdf', '/src/assets/logo.png'],
       },
}
});
