import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

function Login() {
    const{register, handleSubmit,}= useForm
    
    const onSubmit = (data) => console.log(data)

    return (
        <>
         <div>
            <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog"> 
                <Link to='/'
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                </form>
                <h3 className="font-bold text-lg">Login</h3>
                <div className="mt-4 space-y-2">
                    <span>Email</span>
                    <br/>
                    <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("email", { required: true })}/>
                </div>
                <div className="mt-4 space-y-2">
                    <span>Password</span>
                    <br/>
                    <input type="password" placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("password", { required: true })}/>
                </div>
                <div className="flex justify-around mt-4">
                    <button className="text-xl bg-pink-500 text-white px-3 py-1 hover:bg-pink-800 duration-300 rounded-md">Login</button>
                    <p>Not registered ? <Link to='signup' className="underline text-blue-500 cursor-pointer text-xl">Signup </Link></p>

                </div>
            </div>
            </dialog>     
        </div>   
        </>
    )
}

export default Login
