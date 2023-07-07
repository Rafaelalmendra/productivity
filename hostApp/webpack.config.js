const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath:
      argv.mode === "development"
        ? "http://localhost:3000/"
        : "https://hostapp-productivity.vercel.app/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
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
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        host:
          argv.mode === "development"
            ? "host@http://localhost:3000/remoteEntry.js"
            : "https://hostapp-productivity.vercel.app/remoteEntry.js",
        todoApp:
          argv.mode === "development"
            ? "todoApp@http://localhost:3001/remoteEntry.js"
            : "https://todoapp-productivity.vercel.app/remoteEntry.js",
      },
      exposes: {
        "./Header": "./src/components",
        "./Sidebar": "./src/components",
        "./Footer": "./src/components",
        "./Layout": "./src/components",
        "./AuthContextProvider": "./src/contexts",
        "./useAuth": "./src/contexts",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      publicPath: "/",
    }),
  ],
});
