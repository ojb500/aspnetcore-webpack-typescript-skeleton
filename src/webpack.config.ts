import * as webpack from 'webpack';
import * as path from 'path';

const PRODUCTION : boolean = process.env.NODE_ENV == 'production';

const c: webpack.Configuration = {
    entry: { 'main': './main.ts' },
    
    output: {
        path: path.resolve(__dirname, '../wwwroot/dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                //use: ExtractTextPlugin.extract({
                    //fallback: "style-loader",
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader", options: {
                            minimize: PRODUCTION
                        }
                    },
                    ]
                //})
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 25000,
                    },
                }
            },
            //{
            //    test: /\.(jpg|png|svg)$/,
            //    use: {
            //        loader: "file-loader",
            //        options: {
            //            outputPath: 'dist/'
            //        }
            //    },
            //},
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
};

export default c;