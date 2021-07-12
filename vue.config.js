const webpack = require('webpack');
module.exports = {
  outputDir: process.env.OUTPUTDIR,
  devServer: {
    port: 8080
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_variables.scss";`
      }
    }
  }
};
