const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'), // __dirname = diretório onde está o webpack.config.js (arquivo atual)
  output: { // arquivo que vai gerar com o webpack
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: { // extensões dos arquivos que serão lidos
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({ // não ter que adicionar tag script no index.html
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  module: { // configurações de como a aplicação irá se comportar ao importar cada tipo de arquivo
    rules: [
      {
        test: /\.(j|t)sx$/, // extensão
        exclude: /node_modules/, // ignorar .jsx de dentro da pasta node_modules
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        } 
      },
      {
        test: /\.scss$/, // extensão
        exclude: /node_modules/, // ignorar .jsx de dentro da pasta node_modules
        use: ['style-loader', 'css-loader', 'sass-loader'] // converter usando babel-loader, integração do babel com webpacker
      },
    ]
  }
}