import App from "./App";
import "./styles/styles.css";

export default async function render(app) {
  const root = document.getElementById("root");

  root?.replaceChildren(await app());
}

render(App);
