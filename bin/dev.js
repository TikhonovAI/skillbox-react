const webpack = require('webpack');
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');
const webpackDevMiddleare = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');

const hmrServer = express();
const clientCompiler =webpack(webpackClientConfig);

hmrServer.use(webpackDevMiddleare(clientCompiler, {
  publicPath: '/static/',
  serverSideRender: true,
  noInfo: true,
  watchOptios: {
    ignore: /dist/,
  },
  writeToDisk: true,
  stats: 'errors-only'
}));

hmrServer.use(webpackHotMiddleware(clientCompiler, {
  path: '/staic/__webpack_hmr'
}));

hmrServer.listen(3001, () => {
  console.log('HMR Srver successfully started');
  
});

const compiler = webpack(webpackServerConfig);
compiler.run((err) => {
    if (err) {
        console.log('Compilation failed', err);
    }
    
    compiler.watch ({}, (err) => {        
      if (err) {
        console.log('Compilation failed', err);
      }

      console.log('compilation was successfully');
      
    });

    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [ 
            path.resolve(__dirname, '../dist/server'), 
            path.resolve(__dirname, '../dist/client'),
        ]
    });
    
});