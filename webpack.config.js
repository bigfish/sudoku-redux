module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: './dist/main.js',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    immutable: 'Immutable'
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015', 'stage-0']
      }
    },
    { 
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
