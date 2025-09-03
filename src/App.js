import "./styles/reset.css";
import Sidebar from "./components/Sidebar/index.js";
import { createRouter } from "./router.js";

export default function App() {
  const router = createRouter();

  const main = document.createElement("main");
  main.appendChild(Sidebar());

  router.addRoute("/", "empty");
  router.addRoute("/documents", "empty");
  router.addRoute("/documents/:id", main);
  router.start();

  return main;
}
