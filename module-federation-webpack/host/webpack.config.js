const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  // Set the mode to development for better debugging during development.
  mode: 'development',
  // Entry point for the host application.
  entry: './src/index.js',
  // Output configuration for the bundled files.
  output: {
    // Public path for assets, important for Module Federation.
    publicPath: 'http://localhost:3000/',
    // Clean the output directory before each build.
    clean: true,
  },
  // Development server configuration.
  devServer: {
    // Port for the host application.
    port: 3000,
    // Enable history API fallback for client-side routing.
    historyApiFallback: true,
  },
  // Module rules for handling different file types.
  module: {
    rules: [
      {
        // Use babel-loader for JavaScript and JSX files.
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // Presets for React and modern JavaScript.
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  // Plugins used in the webpack configuration.
  plugins: [
    // HtmlWebpackPlugin generates an HTML file and injects the bundles.
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    // ModuleFederationPlugin is the core of microfrontend architecture.
    new ModuleFederationPlugin({
      // Name of the host application.
      name: 'host',
      // Define remote applications that this host will consume.
      remotes: {
        // 'mfe1' refers to the name of the remote exposed in mfe1/webpack.config.js
        // The value is 'mfe1@http://localhost:3001/remoteEntry.js', where:
        // - 'mfe1' is the name of the remote container.
        // - 'http://localhost:3001/' is the public path of mfe1.
        // - 'remoteEntry.js' is the filename of the remote entry file exposed by mfe1.
        mfe1: 'mfe1@http://localhost:3001/remoteEntry.js',
        // Similarly for mfe2.
        mfe2: 'mfe2@http://localhost:3002/remoteEntry.js',
      },
      // Shared dependencies to avoid duplication across microfrontends.
      shared: {
        // Share React as a singleton to ensure only one instance is loaded.
        react: {
          singleton: true,
          requiredVersion: '^18.2.0',
          eager: true,
        },
        // Share ReactDOM as a singleton.
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.2.0',
          eager: true, 
          // Specify required version
        },
      },
    }),
  ],
  // Resolve extensions for easier imports.
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
