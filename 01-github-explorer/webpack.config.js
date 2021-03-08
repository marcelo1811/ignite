const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // __dirname = diretório onde está o webpack.config.js (arquivo atual)
  output: { // arquivo que vai gerar com o webpack
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: { // extensões dos arquivos que serão lidos
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({ // não ter que adicionar tag script no index.html
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: { // configurações de como a aplicação irá se comportar ao importar cada tipo de arquivo
    rules: [
      {
        test: /\.jsx$/, // extensão
        exclude: /node_modules/, // ignorar .jsx de dentro da pasta node_modules
        use: 'babel-loader' // converter usando babel-loader, integração do babel com webpacker
      }
    ]
  }
}