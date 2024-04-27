import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Footer, Header } from "./components";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "./store/authSlice";
import Postform from "./components/Postform";
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
      <Postform />
      <main>{/* <Outlet /> */}</main>
      <Footer />
    </div>
  ) : null;
}

export default App;
