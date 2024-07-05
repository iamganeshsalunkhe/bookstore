/* eslint-disable react-refresh/only-export-components */
import { createContext ,useContext,useState} from "react"

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export default function AuthProvider({children}) {
    
    const initialAuthUser = localStorage.getItem("Users")
    const [authuser, setAuthuser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined);
    return (
    <AuthContext.Provider value = {[authuser,setAuthuser]}>  {children}
    </AuthContext.Provider>    )
}

export const useAuth =()=>{
    return  useContext(AuthContext)
}
