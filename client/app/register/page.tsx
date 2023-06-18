import Link from "next/link";
import { useForm } from "react-hook-form"

import {User, UserDTO} from "./types/user";

export default function Singin() {

    const {register, handleSubmit} = useForm<User>();

    async function registerUser(model: User) {
        const user: UserDTO = {
            NOMEUSUARIO: model.username,
            NOME: model.name,
            SOBRENOME: model.surname,
            SENHA: model.password
        }
        await fetch('http://localhost:3000/api/users', {body: JSON.stringify(user), method: 'POST'})
    }

    return(
        <main>
            <div>
                <h1>Cadastro</h1>
                <form>
                    <label htmlFor="username">Nome de usuário</label>
                    <input type="text"  id="username" {...register('username')}/>

                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" {...register('name')}/>

                    <label htmlFor="surname">Sobrenome</label>
                    <input type="text" id="surname" {...register('surname')}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"  {...register('password')}/>

                    <button type="submit">Cadastrar usuário</button>
                </form>
            </div>
            <Link href={"/"}>Cancelar</Link>
        </main>
    )
}