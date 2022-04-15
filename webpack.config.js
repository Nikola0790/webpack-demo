const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env, argv, mode) => {
  console.log("ENV:");
  console.log(env);
  console.log("ARGV:");
  console.log(argv);
  return {
    mode: argv.mode,
    entry: "./src/index.tsx",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [
            "style-loader", // 3. Inject styles into DOM
            "css-loader", // 2. Translates CSS into CommonJS
            "sass-loader", // 1. Compiles Sass to CSS
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader", // we tell webpack to use babel-loader to transpile files that end with .js
          options: {
            presets: [
              "@babel/preset-env", //transpiling ES2015+ syntax
              "@babel/preset-react", //transpiling react code
            ],
          },
        },
        {
          test: /\.(ts|tsx)?$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
          },
        },
        {
          test: /.(\svg|png|jpg|jpeg|gif)$/,
          use: {
            loader: "file-loader",
          },
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/template.html",
      }),
      /* new webpack.DefinePlugin({
        "process.env": {
          ENVIRONMENT: JSON.stringify(argv.mode),
          API_URL: JSON.stringify(env.API_URL),
        },
      }), */
      new Dotenv({
        path: `./.env.${argv.mode}`,
      }),
    ],
  };
};
