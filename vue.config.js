const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
    ]
  }
},defineConfig({
  transpileDependencies: true
})
