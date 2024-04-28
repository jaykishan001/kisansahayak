import { useEffect, useState } from "react";
import "./App.css";
import { Footer, Header } from "./components";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import "./App.css";
import { login } from "./store/authSlice";

import Season from "./components/pages/Season";
import { Outlet } from "react-router-dom";
import Postform from "./components/Postform";
import Post from "./components/pages/Post";


function App() {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        dispatch(login(userData));
      })
      .catch((error) => {
        console.log("error while fetching userData", error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return !loader ? (
    <div className="">
      <Header />

<<<<<<< HEAD
      <main>{<Post />}</main>
=======
      <main>{<Outlet />}</main>
      <Season />
>>>>>>> 7720bb57b4374a37f10c7dbec6941eebc911ff35

      <Footer />
    </div>
  ) : null;
}

export default App;
