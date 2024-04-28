import { useEffect, useState } from "react";
import "./App.css";
import { Footer, Header } from "./components";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import "./App.css";
import { login } from "./store/authSlice";
import { Outlet } from "react-router-dom";
// import { Outlet } from 'react-router-dom'

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

      <main>{<Outlet />}</main>

      <Footer />
    </div>
  ) : null;
}

export default App;
