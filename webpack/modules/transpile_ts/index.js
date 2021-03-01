export const transpileTs = () => {
  return {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /(node_modules|bower_components)/,
        },
      ],
    },
  };
};
