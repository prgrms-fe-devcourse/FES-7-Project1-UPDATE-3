import "./styles/reset.css";
import { createRouter } from "./router";
import Sidebar from "./components/Sidebar/index.js";

export default function App() {
  const router = createRouter();

  router.addRoute("/", "rootPage");

  return router.getCurrentRoute();
}
