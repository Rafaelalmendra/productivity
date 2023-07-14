/** @type {import("next").NextConfig} */
const deps = require("./package.json").dependencies;
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "financeApp",
          remotes: {
            host: "host@http://localhost:3000/remoteEntry.js",
          },
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./FinanceApp": "./src/pages/index.js",
          },
          extraOptions: {
            // exposePages: true,
            // skipSharingNextInternals: true,
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
          },
        })
      );
    }

    return config;
  },
  // your original next.config.js export
  reactStrictMode: true,
  distDir: "build",
};
