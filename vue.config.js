// const express = require('express')
const webpack = require('webpack')
// const app = express()
var appData = require('./data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings
// var apiRoutes = express.Router()

// app.use('/api', apiRoutes)
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '',
  devServer: {
    before: function (app) {
      // 可请求   api/data
      app.get('/api/seller', function (req, res) {
        res.json({ code: 0, data: seller })
      })
      app.get('/api/goods', function (req, res) {
        res.json({ code: 0, data: goods })
      })
      app.get('/api/ratings', function (req, res) {
        res.json({ code: 0, data: ratings })
      })
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  chainWebpack(config) {
    config.plugin('context')
      .use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/])
  }
}
