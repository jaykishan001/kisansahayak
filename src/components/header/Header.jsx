import React from "react";
import { act } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.active);
  console.log(authStatus);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "About",
      slug: "/about",
      active: true,
    },
    {
      name: "Inventory",
      slug: "/inventory",
      active: authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
  ];

  return (
    <header className="h-18  w-full bg-[#333333] text-white font-bold">
      <nav className="flex justify-between ml-4 mr-4 items-center py-4 ">
        <div>Kishan Sahayak</div>
        <ul className="flex space-x-8">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button onClick={() => navigate(item.slug)}>{item.name}</button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
