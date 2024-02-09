import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage";
import Conditions from "../pages/Conditions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "/HomePage", element: <Homepage /> },
      { path: "/CGV", element: <Conditions /> },
    ],
  },
]);
