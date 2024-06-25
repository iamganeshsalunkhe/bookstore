
import Navbar from "./Navbar";

function Signup() {
    return (
        <>
        <Navbar/>
            <div className="flex h-screen items-center justify-center  shadow-md">
            <div id="my_modal_3" className=" rounded-md ">
            <div className="">
                <h3 className="font-bold text-3xl  text-center">Signup</h3>
                <div className="mt-4 space-y-2">
                    <span>Fullname</span>
                    <br/>
                    <input type="text" placeholder="Enter your name" className="w-80 px-3 py-1 border rounded-md outline-none" name='name' autoComplete="off"/>
                </div>
                <div className="mt-4 space-y-2">
                    <span>Email</span>
                    <br/>
                    <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none" name="email" autoComplete="off"/>
                </div>
                <div className="mt-4 space-y-2">
                    <span>Password</span>
                    <br/>
                    <input type="password" placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none" name="password" autoComplete="off"/>
                </div>
                <div className="flex justify-around mt-4 m-4    ">
                    <button className="text-xl bg-pink-500 text-white px-3 py-1 hover:bg-pink-800 duration-300 rounded-md m-4">Signup</button>
                </div>
                {/* <div className="m-2 text-center">
                    <p>already have an  account ? <button to='/'
                    onClick={()=>document.getElementById('my_modal_3').showModal()}
                    className="underline text-blue-500 cursor-pointer text-xl">Login </button></p>
                    <Login/>
                </div> */}
            </div>
            </div>
            </div>
        </>
    )
}




export default Signup;



