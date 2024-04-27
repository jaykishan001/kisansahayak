import React from 'react'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    
    const handleLogout = ()=> {
    try {
        authService.logout()
        .then(()=> {dispatch(logout())})
        
    } catch (error) {
        console.log("error while logging out", error)
    }
   }

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default LogoutBtn