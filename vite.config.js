import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        'assets': resolve(__dirname, './src/assets'),
        'components': resolve(__dirname, './src/components'),
        'views': resolve(__dirname, './src/views'),
        'utils': resolve(__dirname, './src/utils'),
      },
    },
    plugins: [
      react(),
      nodePolyfills({
        globals: {
          crypto: true,
          global: true,
          process: true,
        }
      }),
      visualizer({
        open: true, // 打包完成后自动打开浏览器
        filename: 'visualizer.html', // 默认文件名
        template: 'treemap',
        gzipSize: true, // 显示 gzip 压缩大小
        brotliSize: true, // 显示 brotli 压缩大小
      }),
      viteCompression({
        verbose: true, // 显示压缩日志
        disable: false, // 禁用压缩
        algorithm: 'gzip', // 压缩算法
        threshold: 10240, // 压缩阈值
        deleteOriginFile: false, // 是否删除源文件
        ext: '.gz',
      })
    ],
    build: {
      outDir: 'dist',
      minify: 'esbuild',
      sourcemap: false,
      rollupOptions: {
        output: {
          // Static resource classification and packaging
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
          /**
           * 
           * @param {*} id 
           * @returns 
           * 接收模块路径(id)作为参数
           * 检查路径是否包含 'node_modules'（表示第三方依赖）
           * 如果是，则返回 'vendor'，效果是：
           * 所有来自 node_modules 的依赖会被打包到单独的 vendor 文件中，生成一个独立的 "vendor bundle" 包含所有第三方库
           * 为什么要这样配置？
              * 缓存优化​​：第三方库更新频率低，单独打包可被浏览器长期缓存
              * 减小主包体积​​：业务代码和依赖代码分离
              * 并行加载​​：浏览器可以同时加载 vendor 和业务代码
           */
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      },
      terserOptions: {
        compress: {
          drop_console: mode === 'production' // 生产环境下开启 console 日志
        }
      }
    },
  }
})
