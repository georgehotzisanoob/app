export const setBabel = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(t|j)sx?$/,
          use: "babel-loader",
          exclude: /(node_modules|bower_components)/,
        },
      ],
    },
  };
};
