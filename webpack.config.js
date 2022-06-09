const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function (_env, argv) {
  const mode = argv.mode || "production";
  return {
    mode,
    entry: {
      app: path.join(__dirname, "src", "index.tsx"),
    },
    devtool: mode === "development" && "cheap-module-source-map",
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      hot: true,
      open: false,
      port: 3600,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.tsx?/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          use: [
            {
              loader: "img-optimize-loader",
            },
          ],
        },
      ],
    },
    target: "web",
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
        hash: true,
      }),
    ],
  };
};
