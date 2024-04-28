import { useEffect, useState } from "react";
import "./App.css";
import { Footer, Header } from "./components";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import "./App.css";
import { login } from "./store/authSlice";
<<<<<<< HEAD
import { Outlet } from "react-router-dom";
// import { Outlet } from 'react-router-dom'
=======
import FarmingSeason from "./components/FarmingSeason";
// import WeatherComp from "./components/Weathercomp";
// import { Outlet } from "react-router-dom";



>>>>>>> e8ccd28 (selection)

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

      {/* <main>{<Outlet />}</main> */}
      <Season />

      <Footer />
    </div>
  ) : null;
}

export default App;