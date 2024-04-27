import React from 'react'
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'


function Login() {
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (data) => {
        setError("")
       try {
        const session = await authService.login(data)
        if(session) {
            const userData = await authService.getCurrentUser()
            if(userData) {
                dispatch(login(userData))
                navigate("/")
            }
        }
        
       } catch (error) {
        setError(error.message)
       }
    }

  return (
    <div>
    
    </div>
  )
}

export default Login