// Core
import webpack from "webpack";
import express from "express";
import hot from "webpack-hot-middleware";
import dev from "webpack-dev-middleware";

// Dev Config
import getDevConfig from "../config/webpack.dev";

// Constants
import { PORT, HOST } from "../utils/constants";

// Compiler
const compiler = webpack(getDevConfig());

// App
const app = express();

// Middleware
app.use(dev(compiler, {}));
app.use(hot(compiler, {}));

// Listen
app.listen(PORT, HOST, () =>
  console.log(`Server is running at http://${HOST}:${PORT}`)
);
