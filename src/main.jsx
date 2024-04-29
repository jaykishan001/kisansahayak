import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
// import AuthLayout from "./components/AuthLayout.jsx";
import Home from "./components/pages/Home.jsx";
import { About } from "./components/index.js";
import LoginComp from "./components/pages/ LoginComp.jsx";
import SignUpComp from "./components/pages/SignUpComp.jsx";
import Postform from "./components/Postform.jsx";
import Post from "./components/pages/Post.jsx";

import Allpost from "./components/Allpost.jsx";
import Buy from "./components/pages/Buy.jsx";

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
        element: <LoginComp />,
      },
      {
        path: "/signup",
        element: <SignUpComp />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/postform",
        element: <Postform />,
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
      { path: "/allpost", element: <Allpost /> },
      ,
      {
        path: "/buy",
        element: <Buy />,
      },
      
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
