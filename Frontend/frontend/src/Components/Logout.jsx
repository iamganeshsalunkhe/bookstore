/* eslint-disable no-unused-vars */
import toast from "react-hot-toast"
import { useAuth } from "../Context/AuthProvider"
import { Navigate } from "react-router-dom"

function Logout() {
    const [authuser, setAuthuser] = useAuth()
    function handleLogout(){
        try {
            setAuthuser(null)
            localStorage.removeItem("Users")
            toast.success("Logout Successfully")
            document.getElementById("my_modal_3").close();
        setTimeout(() => {
        }, 1000);
            return <Navigate to ='/'/>
        } catch (error) {
            toast.error("Error : " + error.message)
            setTimeout(() =>{},2000)
        }
    }

    return (
        <>
            <button className="px-3 py-2 bg-red-600 text-white rounded-md cursor-pointer" onClick={handleLogout}>
                Logout</button>   
        </>
    )
}
export default Logout
