import { useContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { AuthContext } from "../../providers/AuthProvider"
import { useForm } from "react-hook-form"
import { ClientData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"

export interface Client{
    id:number,
    fullName:string,
    email:string,
    telephone:string,

}

export const Dashboard = () =>{

    const [clients, setClients] = useState<Client[]>([])
    const {register,handleSubmit} = useForm<ClientData>({
        resolver: zodResolver(schema)
    })
    const {registerClient} = useContext(AuthContext)

    useEffect(()=>{
        (async ()=>{
            const response = await api.get<Client[]>("clients")
            setClients(response.data)
        })()

    },[])
    return (
        <>
            <h1>dashboard</h1>
            <form onSubmit={handleSubmit(registerClient)}>
                <label htmlFor="name">Nome</label>
                <input type="text"{...register("fullName")} />
                <label htmlFor="email">Email</label>
                <input type="email"{...register("email")} />
                <label htmlFor="telephone">Telefone</label>
                <input type="text"{...register("telephone")} />
                <button type="submit">Confirmar</button>
            </form>

            <ul>
                {
                    clients.map((client)=>
                    <li key={client.id}>
                        {client.fullName}
                        {client.email}
                        {client.telephone}
                        </li>)
                }
            </ul>
        </>
    )
}