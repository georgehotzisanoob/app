// Core
import { merge } from "webpack-merge";
import { HotModuleReplacementPlugin } from "webpack";

// Constants
import { DIST_DIR, HOST, PORT } from "../utils/constants";

// Common Config
import getCommonConfig from "./webpack.common";

// Dev Config
export default (port, host) => {
  return merge(getCommonConfig(), {
    devtool: "eval-cheap-module-source-map",
    mode: "development",
    entry: {
      main: ["webpack-hot-middleware/client", "react-hot-loader/patch"],
    },
    output: {
      filename: "[name].bundle.js",
      path: DIST_DIR,
    },
    plugins: [new HotModuleReplacementPlugin()],
    devServer: {
      constentBase: "./dist",
      host,
      port,
      hot: true,
      historyApiFallback: true,
      overlay: true,
      quiet: true,
      clientLogLevel: "none",
      noInfo: true,
    },
  });
};
