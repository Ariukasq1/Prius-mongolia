require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    domains: ['prius.nmma.co'],
    loader: 'imgix',
  },
  webpack(config, { isServer }) {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      };
    }

    config.plugins.push(new webpack.EnvironmentPlugin(process.env)),
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      });

    return config;
  },
};
