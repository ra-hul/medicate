import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvder"

const useAuth = ()=>{
    return useContext(AuthContext);
}

export default useAuth;