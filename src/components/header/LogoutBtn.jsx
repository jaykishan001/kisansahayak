import React from "react";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const  handleLogout = async () => {
    try {
      await authService.logout()
      .then(() => {
        dispatch(logout());
        navigate("/");
      });
    } catch (error) {
      console.log("error while logging out", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutBtn;
