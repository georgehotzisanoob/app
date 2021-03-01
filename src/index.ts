import "./styles/index.scss";
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import "./react";

const btn = document.getElementById("btn");

btn?.addEventListener("click", () => {
  import("./components").then(({ createDiv }) => {
    document.body.append(createDiv("code splitting"));
  });
});

const obj = {
  a: "a",
};

console.log(obj);
