const path = require('path');

module.exports = {
    mode:'production',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve:{
      extensions: ['.js','.jsx']
    }, module: {
        rules: [
          //BABEL
          {
            test: /\.?[js|jsx]$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.gcss/i,
            use:["style-loader","css-loader"]
          },
          //CSS MODULE
          {
            test:/\.css$/,
            use:[
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader",
                options:{
                  modules:{
                    localIdentName: "[local]__[hash:base64:5]"
                  }
                }
              }
            ]
          },
        ]
      },
  };
