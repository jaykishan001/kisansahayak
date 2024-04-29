import React from "react";
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
      slug: "/allpost",
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
    {
      name: "Add Item",
      slug: "/postform",
      active: authStatus,
    },
    {
      name: "Cart",
      slug: "/cart",
      active: authStatus,
    },
    {
      name: "Buy product",
      slug: "/buyproduct",
      active: authStatus
    }
    
  ];

  return (
    <header className="h-18  w-full bg-[#333333] text-white text-xl font-thin">
      <nav className="flex justify-between ml-4 mr-4 items-center py-5 ">
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
