import "./styles/reset.css";
import Sidebar from "./components/Sidebar/index.js";
import { createRouter } from "./router.js";
import Editor from "./components/Editor/index.js";

export default async function App() {
  const router = createRouter();

  const main = document.createElement("main");
<<<<<<< HEAD
  main.appendChild(Sidebar());
  main.appendChild(Editor());
=======
  main.appendChild(await Sidebar());
>>>>>>> a8becbf (이벤트 리스너를 이벤트 위임 형식으로 변경하고 sidebarEl에 적용)

  router.addRoute("/", "empty");
  router.addRoute("/documents", "empty");
  router.addRoute("/documents/:id", main);
  router.start();

  return main;
}
