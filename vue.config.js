const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true,
  devServer: { //配置自动打开浏览器的地址
    host: 'localhost',
    port: 8080,
  },
})
