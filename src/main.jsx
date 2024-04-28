import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import {BrowserRouter,RouterProvider,createBrowserRouter} from "react-router-dom";
// import AuthLayout from "./components/AuthLayout.jsx";
import Home from "./components/pages/Home.jsx";
import { About } from "./components/index.js";
import LoginComp from "./components/pages/ LoginComp.jsx";
import SignUpComp from "./components/pages/SignUpComp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginComp/>,
      },
      {
        path: "/signup",
        element: <SignUpComp />,
      },
      {
        path: "/about",
        element: <About />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
