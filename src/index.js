import App from "./App";
import Sidebar from "./components/Sidebar/index.js";

export default function render(app) {
  const root = document.getElementById("root");

  root?.replaceChildren(app());
}

render(App);

// Sidebar
const root = document.querySelector("#root");
const TEST_DOCUMENTS = [
  {
    id: 1,
    title: "최상위 페이지",
    documents: [
      {
        id: 2,
        title: "하위 페이지 1",
        documents: [
          {
            id: 3,
            title: "하위 페이지 1-1",
            documents: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "최상위 페이지 2",
    documents: [],
  },
];
Sidebar(root, TEST_DOCUMENTS);
