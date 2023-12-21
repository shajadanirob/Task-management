import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/UseAuth";


const Login = () => {
    const {signIn,signInWithGoogle,loading,} = useAuth()
    const navigate = useNavigate()


     // from submit handler
  const handleSubmit = async event =>{
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    try{
     
      //1. user registration
      const result = await signIn(email,password)
      console.log(result)


      //5. get token
    //   await getToken(result?.user?.email)


      toast.success('logIn successFully')
    
    //   navigate(from,{replace:true})
    navigate('/')

    }
    catch(err){
      console.log(err)
      toast.error(err.message)
    }
   
  }
 // handleGoogle sign in
 const handleGoogleSignIn = async () =>{
    try{
     
     //1. user registration with google
      const result = await signInWithGoogle()
      console.log(result)

        
 

      //3. get token
    //   await getToken(result?.user?.email)

      toast.success('logIn successFully')
      navigate('/')

    }
    catch(err){
      console.log(err)
      toast.error(err.message)
    }
  }
    return (
        <div>
<div
    className="relative my-24 mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
    <div className="w-full">
        <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p className="mt-2 text-gray-500">Sign in below to access your account</p>
        </div>
        <div className="mt-5">
            <form onSubmit={handleSubmit}>
                <div className="relative mt-6">
                    
                    <input type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                    <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                </div>
                <div className="relative mt-6">
                    <input type="password" name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label for="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                </div>
                <button
                onClick={handleGoogleSignIn}
                        className="inline-flex my-5 h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                            src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google"
                            className="h-[18px] w-[18px] "/>Continue with
                        Google
                    </button>
                
                <div className="my-6">
                    <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                </div>
                <p className="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                    <Link to='/signUp'
                        className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign
                        up
                    </Link>.
                </p>
                
            </form>
        </div>
    </div>
</div>
  
        </div>
    );
};

export default Login;