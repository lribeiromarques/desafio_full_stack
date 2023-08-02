import { useForm } from "react-hook-form"
import { RegisterData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthContext } from "../../providers/AuthProvider"
import { useContext } from "react"
import { Link } from "react-router-dom"

export const Register = () =>{
    const {register,handleSubmit} = useForm<RegisterData>({
        resolver: zodResolver(schema)
    })
    const {registered} = useContext(AuthContext)

    return(
        <main>

            <h2>Register</h2>

            <form onSubmit={handleSubmit(registered)}>
                <label htmlFor="name">Nome</label>
                <input type="text"{...register("fullName")} />
                <label htmlFor="email">Email</label>
                <input type="email"{...register("email")} />
                <label htmlFor="password">Senha</label>
                <input type="password" {...register("password")} />
                <label htmlFor="telephone">Telefone</label>
                <input type="text"{...register("telephone")} />
                <button type="submit">Confirmar</button>
                <Link to="/"><button>Login</button></Link>

            </form>
        </main>


    )
}