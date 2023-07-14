const deps = require("./package.json").dependencies;
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (_, argv) => ({
  cache: true,
  entry: {
    index: "./src/index.ts",
  },
  output: {
    publicPath:
      argv.mode === "development"
        ? "http://localhost:3001/"
        : "https://todoapp-productivity.vercel.app/",
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "todoApp",
      filename: "remoteEntry.js",
      remotes: {
        host:
          argv.mode === "development"
            ? "host@http://localhost:3000/remoteEntry.js"
            : "host@https://todoapp-productivity.vercel.app/remoteEntry.js",
      },
      exposes: {
        "./TodoApp": "./src/App",
      },
      shared: {
        ...deps,
        react: {
          eager: true,
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          eager: true,
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      title: "Productive | Todo",
      template: "./src/index.html",
    }),
  ],
});
