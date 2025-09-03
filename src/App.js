import "./styles/reset.css";
import Sidebar from "./components/Sidebar/index.js";
import { createRouter } from "./router.js";
import Editor from "./components/Editor/index.js";

export default function App() {
  const router = createRouter();

  const main = document.createElement("main");
<<<<<<< HEAD
<<<<<<< HEAD
  main.appendChild(Sidebar());
  main.appendChild(Editor());
=======
  main.appendChild(await Sidebar());
>>>>>>> a8becbf (이벤트 리스너를 이벤트 위임 형식으로 변경하고 sidebarEl에 적용)
=======
  Sidebar().then((sidebarEl) => {
    main.appendChild(sidebarEl);
  });
  // main.appendChild(Sidebar());
>>>>>>> dae8d51 (App.js에서 then을 이용하여 promise 반환값 처리)

  router.addRoute("/", "empty");
  router.addRoute("/documents", "empty");
  router.addRoute("/documents/:id", main);
  router.start();

  return main;
}
