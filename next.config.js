/*
 * Copyright 2019, 2021, 2022 sukawasatoru
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/** @type {import('next').NextConfig} */
const config = {
  env: {
    HELLO: process.env.HELLO,
  },
  experimental: {
    runtime: 'experimental-edge',
  },
  poweredByHeader: false,
  reactStrictMode: true,
  staticPageGenerationTimeout: 30,
  swcMinify: true,
  webpack: (config, options) => {
    if (options.isServer) {
      config.plugins.push(
        new ForkTsCheckerWebpackPlugin(),
      );

      if (process.env.BUNDLE_ANALYZER) {
        const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
        config.plugins.push(new BundleAnalyzerPlugin());
      }
    }

    return config;
  },
};

module.exports = config;
