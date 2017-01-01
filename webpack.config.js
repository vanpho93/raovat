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
      ItemNavLeft: 'app/components/ItemNavLeft.js',
      ListProduct: 'app/components/ListProduct.js',
      Product: 'app/components/Product.js',
      SearchForm: 'app/components/SearchForm.js',
      ShortForm: 'app/components/ShortForm.js',
      ViewMain: 'app/components/ViewMain.js',
      DangTin: 'app/components/DangTin.js',
      ChiTiet: 'app/components/ChiTiet.js',
      TaiKhoan: 'app/components/TaiKhoan.js',
      DangKy: 'app/components/DangKy.js',
      DangNhap: 'app/components/DangNhap.js',
      ThongTinTaiKhoan: 'app/components/ThongTinTaiKhoan.js',
      Admin: 'app/components/Admin.js'
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
