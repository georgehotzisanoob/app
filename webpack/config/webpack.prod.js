// Core
import { merge } from "webpack-merge";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

// Constants
import { BUILD_DIR } from "../utils/constants";

// Common Config
import getCommonConfig from "./webpack.common";

// Prod Config
export default () => {
  return merge(getCommonConfig(), {
    mode: "production",
    devtool: false,
    output: {
      filename: "[name].bundle.js",
      path: BUILD_DIR,
    },
    plugins: [new BundleAnalyzerPlugin({ analyzerMode: "disabled" })],
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: "all",
        minSize: 10000,
        minRemainingSize: 0,
        maxSize: 20000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
  });
};
