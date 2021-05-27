import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import 'webpack-dev-server'

const config: webpack.Configuration = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}), 
        new MiniCssExtractPlugin(),
        new ForkTsCheckerWebpackPlugin({
            async: false,
            eslint: {
              files: "./src/**/*",
            },
          })
    ]
}

export default config