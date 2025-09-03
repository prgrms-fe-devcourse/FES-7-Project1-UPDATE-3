import "./styles/reset.css";
<<<<<<< HEAD
import Sidebar from "./components/Sidebar/index.js";
import { createRouter } from "./router.js";
=======
import { createRouter } from "./router";
import Sidebar from "./components/Sidebar/index.js";
>>>>>>> 16d5b20 (feat: Sidebar가 DOM구조를 return 하도록 구조 변경)

export default function App() {
  const main = document.createElement("main");

<<<<<<< HEAD
  const main = document.createElement("main");
  main.appendChild(Sidebar());

  router.addRoute("/", "emptyPage");
  router.addRoute("/documents", "emptyPage");
  router.addRoute("/documents/:id", main);
=======
  const aside = document.createElement("aside");
  aside.innerText = "aside";

  main.appendChild(Sidebar());
>>>>>>> 16d5b20 (feat: Sidebar가 DOM구조를 return 하도록 구조 변경)

  return main;
}
