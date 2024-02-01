//@ts-check

'use strict';

const path = require('path');

//@ts-check
/** @typedef {import('webpack').Configuration} WebpackConfig **/
const extensionConfig = {
    // VS Code extensions run in a Node.js-context 📖 -> https://webpack.js.org/configuration/node/
    // VS Code 插件运行在一个 Node.js 上下文中
    target: 'node',
    // this leaves the source code as close as possible to the original (when packaging we set this to 'production')
    // mode 设置成 none 使得编译的代码尽可能还原源代码。（打包的时候设置成 production）
    mode: 'none',

    // the entry point of this extension, 📖 -> https://webpack.js.org/configuration/entry-context/
    // 插件的入口
    entry: './src/extension.ts',
    output: {
        // the bundle is stored in the 'dist' folder (check package.json), 📖 -> https://webpack.js.org/configuration/output/
        // 输出的打包文件存放在 dist 目录下，这个目录在 package.json 中配置的。
        path: path.resolve(__dirname, 'dist'),
        filename: 'extension.js', // 文件名
        libraryTarget: 'commonjs2', // 目标库标准
    },
    externals: {
        // the vscode-module is created on-the-fly and must be excluded. Add other modules that cannot be webpack'ed, 📖 -> https://webpack.js.org/configuration/externals/
        // vscode 模块是动态创建的，必须排出。可以添加其他同样不能够被 webpack 打包的模块。
        vscode: 'commonjs vscode',
        // modules added here also need to be added in the .vscodeignore file
        // 被添加在这里的模块也需要被加到 .vscodeignore 文件
    },
    resolve: {
        // support reading TypeScript and JavaScript files, 📖 -> https://github.com/TypeStrong/ts-loader
        // 支持读取 TypeScript 和 JavaScript 文件。
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
        ],
    },
    devtool: 'nosources-source-map',
    infrastructureLogging: {
        // enables logging required for problem matchers
        // 启用问题匹配器所需的日志记录
        level: 'log',
    },
};

module.exports = [extensionConfig];
