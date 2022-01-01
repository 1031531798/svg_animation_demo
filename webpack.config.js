const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js', //相对路径
    output: {
        path: path.resolve(__dirname, 'build'), //打包文件的输出路径
        filename: 'bundle.js' //打包文件名
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: './public/index.html', //指定模板路径
          filename: 'index.html', //指定文件名
      })
  ],
  devServer: {
    host: "localhost",
    port: 9000,
  },
  module: {
    rules: [ //配置加载器
        {
            test: /\.jsx$/, //配置要处理的文件格式，一般使用正则表达式匹配
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options:{
                  "presets": ["@babel/preset-react", "@babel/preset-env"],
                  "plugins": ["@babel/plugin-transform-runtime"]
              }
          },
        },
        {
          test: /\.js$/, //配置要处理的文件格式，一般使用正则表达式匹配
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options:{
                "presets": ["@babel/preset-env"],
                "plugins": ["@babel/plugin-transform-runtime"]
            }
        },
      },
      {
        test: /\.css$/, //配置要处理的文件格式，一般使用正则表达式匹配
        exclude: /node_modules/,
        use: ['style-loader' , 'css-loader']
      },
    ]
  }
}