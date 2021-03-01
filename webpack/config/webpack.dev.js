// Core
import { merge } from "webpack-merge";
import { HotModuleReplacementPlugin } from "webpack";

// Constants
import { DIST_DIR } from "../utils/constants";

// Common Config
import getCommonConfig from "./webpack.common";

// Dev Config
export default () => {
  return merge(getCommonConfig(), {
    devtool: false,
    mode: "development",
    entry: {
      main: ["webpack-hot-middleware/client"],
    },
    output: {
      filename: "[name].bundle.js",
      path: DIST_DIR,
    },
    plugins: [new HotModuleReplacementPlugin()],
    devServer: {
      hot: true,
    },
  });
};
