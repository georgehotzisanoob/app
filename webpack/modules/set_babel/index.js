export const setBabel = () => {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          use: "babel-loader",
          exclude: /(node_modules|bower_components)/,
        },
      ],
    },
  };
};
