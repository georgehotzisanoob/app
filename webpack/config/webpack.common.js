// Core
import { merge } from "webpack-merge";

// Constants
import { SRC_DIR } from "../utils/constants";

// Modules
import * as modules from "../modules";

// Common Config
export default () => {
  return merge(
    {
      entry: {
        main: [SRC_DIR],
      },
      resolve: {
        extensions: [".js", ".ts", ".tsx", ".jsx"],
      },
    },
    modules.setHtml(),
    modules.loadStyles(),
    modules.setBabel(),
    modules.transpileTs()
  );
};
