import "./styles/reset.css";
import { createRouter } from "./router";
import Sidebar from "./components/Sidebar/index.js";

// Sidebar 더미 데이터
const TEST_DOCUMENTS = [
  {
    id: 1,
    title: "최상위 페이지",
    documents: [
      {
        id: 2,
        title: "하위 페이지 1",
        documents: [],
      },
    ],
  },
  {
    id: 4,
    title: "최상위 페이지 2",
    documents: [],
  },
];

export default function App() {
  const router = createRouter();

  const root = document.querySelector("#root");

  if (root) {
    const sidebarEl = Sidebar(TEST_DOCUMENTS);
    root.appendChild(sidebarEl);
  }

  router.addRoute("/", "rootPage");

  return router.getCurrentRoute();
}
