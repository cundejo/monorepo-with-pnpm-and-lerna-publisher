import path from 'path'
import { defineConfig } from 'vite'

const packageName ='ccc'

const fileName = {
  es: `${packageName}.mjs`,
  cjs: `${packageName}.cjs`,
};


// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.js"),
      name: packageName,
      formats: ["es", "cjs"],
      fileName: (format) => fileName[format],
    },
  },
})
