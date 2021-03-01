export const setBabel = () => {
  return {
    module: {
      rules: [
        {
          test: /\.js?x$/,
          use: "babel-loader",
          exclude: /(node_modules|bower_components)/,
        },
      ],
    },
  };
};
