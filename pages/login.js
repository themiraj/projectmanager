import React,{useState} from 'react'
import Link from 'next/link'
import app from '../firebase'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function Login() {
    const router = useRouter()
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const registerUser = event => {
        event.preventDefault() // don't redirect the page
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            toast.success("Congratualtion your successfully login")
            setTimeout(()=> {
                router.push('/')
            },2000)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(error.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            // ..
        });
        // where we'll add our form logic
    }
    return (
        <>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover>
      </ToastContainer>
        <div className="min-w-full min-h-screen bg-blue-100 flex justify-center items-center">
            <div className="w-full max-w-md">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={registerUser}>
                    <h4 className="font-bold mb-5 text-lg border-b-2 border-indigo-600 pb-2">Login</h4>  
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" 
                        value={email} 
                        onChange={(e)=> setemail(e.target.value)}
                    />
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" 
                        value={password} 
                        onChange={(e)=> setpassword(e.target.value)}
                    />
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                    <button type="submit" className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-none focus:outline-none focus:shadow-outline bg-gradient-to-tr from-blue-600 to-red-500">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                    </div>
                    <div className="text-center pt-2 mt-5 border-t-2 border-blue-300 ">I you Don't have account<Link href="/singup"><a className="text-center w-full font-bold pt-2 text-blue-500 ml-2 hover:text-blue-700">Signup</a></Link></div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
                </div>
        </div>
        </>
    )
}

export default Login
