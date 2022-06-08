const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function (_env, argv) {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;
  return {
    entry: {
      app: path.join(__dirname, "src", "index.tsx"),
    },
    devtool: isDevelopment && "cheap-module-source-map",
    module: {
      rules: [
        {
          test: /\.tsx?/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    target: "web",
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
    ],
  };
};
