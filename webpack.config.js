var webpack = require('webpack');
module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  externals:{
    jquery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({"$":"jquery"})
  ],
  resolve:{
    root: __dirname,
    alias: {
      Main: 'app/components/Main.js',
      RaoVat: 'app/components/RaoVat.js',
      TopNav: 'app/components/TopNav.js',
      About: 'app/components/About.js',
      TuyenDung: 'app/components/TuyenDung.js',
      LeftNavList: 'app/components/LeftNavList.js',
      ItemNavLeft: 'app/components/ItemNavLeft.js'
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
