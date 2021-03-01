export const transpileTs = () => {
  return {
    module: {
      rules: [
        {
          test: /\.ts?x$/,
          use: "ts-loader",
          exclude: /(node_modules|bower_components)/,
        },
      ],
    },
  };
};
