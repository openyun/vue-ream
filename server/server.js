const express = require('express')
const ream = require('ream')
const config = require('../ream.config')

const dev = process.env.NODE_ENV !== 'production'
const app = ream(Object.assign({ dev }, config))
const port = process.env.PORT || 4000

if (dev) {
  console.log('> Please wait...')
}

app.prepare()
  .then(() => {
    const server = express()
    //代理设置
    const proxy = require('http-proxy-middleware');
    var options = {
      target: 'https://api.douban.com/v2', // target host
      changeOrigin: true,               // needed for virtual hosted sites
      pathRewrite: {
        '^/api': ''
      }
    };
    var exampleProxy = proxy(options);
    server.use('/api', exampleProxy);
    
    server.get('*', app.getRequestHandler())

    server.listen(port)
  })

app.on('ready', () => {
  ream.displayStats(app.stats)
  console.log(`> Open http://localhost:${port}`)
})
