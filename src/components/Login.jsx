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
<<<<<<< HEAD
    <div>
    
=======
    <div className='flex items-center justify-center w-full'>
    <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}> 
        <div className='mb-2 flex justify-center'>
            <span className="inline-block w-full max-w-[100px]">
                <Logo width='100%'/>
            </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in your to Your account</h2>
        <p className="mt-2 text-center text-base text-black/60"> If dont have an account 
            <Link className="font-medium text-primary transition-all duration-200 hover:underline"
             to= "/sign-up">Sign Up</Link>
        </p>
        {error && <p className='text-red'>{error}</p>}

        <Form onSubmit={handleSubmit(login)} className='mt-8'>
           <div className='space-y-5'>
            <Input 
            label="Email"
            placeholder = "Enter your Email"
            type= "email"
            {...register("email", {
                required: true,
                validate: {
                    matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                } 
            })}        
            />
            <Input 
            label = "password"
            placeholder= "Enter the Password"
            type = "password"
            {...register("password", {
                required:true,
            })}
            />
            <button className='w-full px-4 py-2 rounded-lg'>Sign in</button>

           </div>
            
        </Form>
>>>>>>> 99f3c58 (changes)
    </div>
</div>
   
  )
}

export default Login