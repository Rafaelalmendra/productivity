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
        ? "http://localhost:3000/"
        : "https://hostapp-productivity.vercel.app/",
  },
  devServer: {
    port: 3000,
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
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
        options: {
          presets: [require.resolve("@babel/preset-react")],
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
            : "host@https://hostapp-productivity.vercel.app/remoteEntry.js",
        productA:
          argv.mode === "development"
            ? "todoApp@http://localhost:3001/remoteEntry.js"
            : "todoApp@https://todoapp-productivity.vercel.app/remoteEntry.js",
      },
      exposes: {
        "./Header": "./src/components/Header.tsx",
        "./Sidebar": "./src/components/Sidebar.tsx",
        "./Footer": "./src/components/Footer.tsx",
        "./Layout": "./src/components/Layout.tsx",
        "./AuthContext": "./src/contexts/AuthContext.tsx",
        "./AuthContextProvider": "./src/contexts/AuthContextProvider.tsx",
        "./useAuth": "./src/hooks/useAuth.tsx",
        "./UserAuth": "./src/contexts/UserAuth.tsx",
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
          requiredVersion: deps.react,
        },
      },
    }),
    new HtmlWebPackPlugin({
      title: "Productive | Login",
      template: "./src/index.html",
    }),
  ],
});
