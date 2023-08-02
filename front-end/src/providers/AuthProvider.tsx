import { ReactNode, createContext } from "react";
import { LoginData } from "../pages/login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../pages/register/validator";
import { ClientData } from "../pages/dashboard/validator";

interface AuthProviderProps{
    children: ReactNode
}

interface AuthContextValues{
    signIn: (data:LoginData)=>Promise<void>
    registered: (data: RegisterData) => Promise<void>
    registerClient: (data: ClientData) => Promise<void>

}

interface LoginResponse {
    token: string
}

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({children}:AuthProviderProps) =>{
    const navigate = useNavigate()

    const signIn = async(data:LoginData)=>{
        try{

            const response = await api.post<LoginResponse>("/login", data)
            const {token} = response.data
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            navigate("/dashboard")
        }
       catch(error){
        console.log(error)
       }
    }
    const registered = async (data:RegisterData)=>{
     try {
         const response = await api.post("/users",data,)
         const {token} = response.data
         api.defaults.headers.common.Authorization = `Bearer ${token}`
         navigate("/")
     } catch (error) {
         console.log(error)
        
     }
 } 
 
    const registerClient = async(data:ClientData)=>{
        try{
            const response = await api.post("/contacts",data)
            const {token} = response.data
            api.defaults.headers.common.Authorization = `Bearer ${token}`
         
        }catch (error) {
            console.log(error)
           
        }
    }

    return (
        <AuthContext.Provider value={{signIn,registered,registerClient}}>
            {children}
        </AuthContext.Provider>
    )
}