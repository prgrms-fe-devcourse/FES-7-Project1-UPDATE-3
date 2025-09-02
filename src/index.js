import App from "./App";

export const render = (app) => {
  const root = document.getElementById("root");

  root?.appendChild(app());
};

render(App);
