const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    // Public path for assets, specific to MFE1's port.
    publicPath: 'http://localhost:3001/',
    clean: true,
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      // Name of this microfrontend, used by other applications to refer to it.
      name: 'mfe1',
      // Filename for the remote entry file, which acts as a manifest.
      filename: 'remoteEntry.js',
      // Components or modules exposed by this microfrontend.
      exposes: {
        // './Button' is the alias used by consumers, './src/Button' is the actual path.
        './Button': './src/Button.js',
      },
      // Shared dependencies to avoid duplication.
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.2.0',
          eager: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.2.0',
          eager: true,
        },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
