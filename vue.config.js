const path = require('path');

module.exports = {
  transpileDependencies: [],
  
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
  },
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // 静态资源目录
  assetsDir: 'assets',
  // 是否开启eslint
  lintOnSave: true,
  // webpack配置
  configureWebpack: {
    // 配置webpack插件
    plugins: [],
  },
  // 开发服务器配置
  devServer: {
    // 代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  // 第三方插件配置
  pluginOptions: {
  // ...
  
  },
};
