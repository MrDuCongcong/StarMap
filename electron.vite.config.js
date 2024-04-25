import path from "path";
import { defineConfig, externalizeDepsPlugin} from "electron-vite";
import react from '@vitejs/plugin-react';
import postcssNesting from 'postcss-nesting'

export default defineConfig({
    main: {
        plugins: [externalizeDepsPlugin()]
    },
    preload: {
        plugins: [externalizeDepsPlugin()]
    },
    renderer: {
        plugins: [react(), postcssNesting],
        css: {
            modules: {
                localsConvention: 'camelCaseOnly'// 只转换小驼峰
            }
        },
        resolve: {
            alias: {
                '@': path.resolve('src/renderer/src')
            }
        },
    }
})