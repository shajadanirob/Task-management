import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/UseAuth";
import { imageUpload } from "../../Api/Utiliti";


const Register = () => {
    const { createUser,  updateUserProfile,signInWithGoogle} = useAuth()
    const navigate = useNavigate()

    const handleRegister = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.files[0];
        const email = form.email.value;
        const password = form.password.value;

        try {
            // 1. upload image
            const imageData = await imageUpload(image);
            const allData = {
                name,
                email,
                password,
              
            };
            console.log(allData)
            console.log(image)
             // 2. user registration
           const result= await  createUser(email, password);
        

             // 3. save user and profile photo
             await updateUserProfile(
                 name,
                 imageData?.data?.display_url,
             );
            
             toast.success('Register SucessFully')
             navigate('/')
        }
        catch(err) {
            console.error(err);
            // toast.error(err.message);
          

        }
    }

      // handleGoogle sign in
      const handleGoogleSignIn = async () => {
        try {
            // 1. user registration with google
            const result = await signInWithGoogle();

         

    

            toast.success('Sign up successfully');
            navigate('/');
        } catch (err) {
            console.error(err);
            toast.error(err.message);
        }
    };
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
                        <form onSubmit={handleRegister}>

                            <div className="relative mt-6">

                                <input type="text" name="name" id="name" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Your Name</label>
                            </div>

                            <div className="relative mt-6">

                                <input type="file" name="image" id="image" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">You image</label>
                            </div>
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
                                    className="h-[18px] w-[18px] " />Continue with
                                Google
                            </button>

                            <div className="my-6">
                                <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                            </div>
                            <p className="text-center text-sm text-gray-500">you have allready account?
                                <Link to='/login'
                                    className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign
                                    in
                                </Link>.
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;