const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: "production",
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/' // 讓webpack了解該去哪看更新
    },
    // devtool: 'false',
    devServer: {
        static: [
          {
            directory: path.join(__dirname),
          },
        ],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/ // 排除編譯
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
}