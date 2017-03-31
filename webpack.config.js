const APP_DIR = `${__dirname}/src/client`
const BUILD_DIR = `${__dirname}/public`

module.exports = {
  entry: `${APP_DIR}/app.js`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}
