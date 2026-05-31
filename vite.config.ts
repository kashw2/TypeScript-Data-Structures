/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'TypeScriptDataStructures',
            formats: ['umd'],
            fileName: () => 'dist.js',
        },
        outDir: 'dist',
        emptyOutDir: true,
        minify: false,
    },
    test: {
        globals: true,
        include: ['src/**/*.{spec,test}.ts'],
    },
});
