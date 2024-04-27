import React from 'react'
import { act } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate()
  const authStatus = useSelector((state) => state.auth.status)

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
      
    },
    {
      name: "About",
      slug: "/about",
      active: true
    },
    {
      name: "Inventroy",
      slug: "/inventory",
      active: authStatus
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus
    },


  ]

  return (
   <div>
    <header>
      <nav className='flex '>
        <div>Kishan Sahayak</div>
        <ul className='flex'> 
          {navItems.map((item)=> (
            item.active ?  (
            <li className='flex' key={item.name}>
              <button 
              onClick={()=> navigate(item.slug)}
              >{item.name}</button>
            </li>
          ): null ))}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </header>
   </div>
)}

export default Header