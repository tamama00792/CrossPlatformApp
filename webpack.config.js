const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    externals: {
        "react": true,
        "react-native": true,
        "react-native-gesture-handler": true,
        "react-native-reanimated": true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/, // 处理 .js 或 .jsx 文件
                exclude: /node_modules/, // 默认排除 node_modules
                use: ["babel-loader"],
            },
            {
                test: /\.(js|jsx|tsx|ts)$/, // 再次处理 .js 或 .jsx 文件
                include: [
                    // path.resolve(__dirname, "node_modules/react"), // 需要编译的库1
                    path.resolve(__dirname, "node_modules/react-native"), // 需要编译的库2
                    path.resolve(__dirname, "node_modules/react-native-gesture-handler"), // 需要编译的库2
                    path.resolve(__dirname, "node_modules/react-native-reanimated"), // 需要编译的库2
                ],
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env", // 转译成兼容的 ES5 语法
                                "@babel/preset-typescript", // 解析 TypeScript 语法
                            ],
                            cacheDirectory: true, // 启用缓存提高构建速度
                        },
                    },
                ],
            },
        ],
    },
}