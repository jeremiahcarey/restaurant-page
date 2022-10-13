import path from 'path';
import { URL } from 'url';

// Will contain trailing slash
const __dirname = new URL('.', import.meta.url).pathname;

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(pn|sv|jpe?)g/,
        type: 'asset/resource',
        generator: {
          outputPath: './',
          filename: 'img/[name][ext]',
        },
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
        // don't want it to be a hashed name
        generator: {
          outputPath: './',
          filename: '[name][ext]',
        },
      },
      /**
       * Normally you would minify and templatize this but
       * this just moves it
       */
      {
        test: /\.html/,
        type: 'asset/resource',
        // don't want it to be a hashed name
        generator: {
          outputPath: './',
          filename: '[name][ext]',
        },
      },
    ]
  },
  devtool: 'inline-source-map',
};
