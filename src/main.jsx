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
import { About, AuthLayout } from "./components/index.js";
import LoginComp from "./components/pages/ LoginComp.jsx";
import SignUpComp from "./components/pages/SignUpComp.jsx";
import Postform from "./components/Postform.jsx";
import Post from "./components/pages/Post.jsx";
import PostCard from "./components/PostCard.jsx";
import Allpost from "./components/Allpost.jsx";

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
        element: (
          <AuthLayout  authentication={false}>
            <LoginComp />,
          </AuthLayout>
        )
        
      },
      {
        path: "/signup",
        element: (
          <AuthLayout  authentication={false}>
            <SignUpComp />,
          </AuthLayout>
        ) 
        
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/postform",
        element: (
          <AuthLayout authentication={true} >
            <Postform />,
          </AuthLayout>
        ) 
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
      { path: "/allpost", element: <Allpost /> },
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
