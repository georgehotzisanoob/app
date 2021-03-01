// Core
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// Load Styles
export const loadStyles = (env) => {
  const isDev = env === "development";

  return {
    plugins: isDev
      ? []
      : [new MiniCssExtractPlugin({ filename: "[name].css" })],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            isDev
              ? { loader: "style-loader" }
              : { loader: MiniCssExtractPlugin.loader },
            { loader: "css-loader" },
            { loader: "sass-loader" },
          ],
        },
      ],
    },
  };
};
