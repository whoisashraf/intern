// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   css: {
//     preprocessorOptions: {
//       sass: {
//         api: 'modern-compiler',
//       }
//     }
//   }
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        // Include paths if needed, for example, to specify global variables or mixins
        // additionalData: `@use "@skyscanner/bpk-foundations-web/tokens/base.default.scss";`
      }
    }
  }
})
