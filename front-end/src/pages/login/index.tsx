import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginData, schema } from "./validator"
import { useAuth } from "../../hooks/useAuth"
import { Link } from "react-router-dom"

export const Login = () =>{

    const {register,handleSubmit} = useForm<LoginData>({
        resolver: zodResolver(schema)
    })
    const {signIn} = useAuth()
    return (
        <main>
            <h2>Login</h2>

            <form onSubmit={handleSubmit(signIn)} >
                <label htmlFor="email">Email</label>
                <input type="email" id="email"{...register("email")} />
                <label htmlFor="password">Senha</label>
                <input type="password" id="password"{...register("password")} />
                <Link to="dashboard"><button type="submit">Entrar</button></Link> 
                <Link to="register">
                    <button>Cadastrar</button>
                </Link>
            </form>
        </main>
    )
}