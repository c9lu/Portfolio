var HTMLWebpackPlugin =require ('html-webpack-plugin');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname+'/index.html',
  filename:'index.html',
  inject:'body'
});

module.exports={


    entry: __dirname+'/index.js',
    module:{
        
     
        loaders:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader'
            },
          { test: /\.css$/, loader: 'style-loader'},
           {
                test:/\.css$/,
                loader: "css-loader"
            }
        ,    
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        
        
        ]
    },
    output:{filename:'transformed.js',
            path:__dirname +'/build',

            publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
      },
      plugins:[HTMLWebpackPluginConfig]
};