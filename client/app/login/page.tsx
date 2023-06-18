'use client';
import {useForm} from "react-hook-form";

import {Button, Input} from "@/components";
import {User, UserDTO} from "@/types";

export default function Login() {
    async function login(model: User) {
        const user: UserDTO = {
            NOMEUSUARIO: model.username,
            SENHA: model.password
        }
        const data = await fetch('http://localhost:80/Usuario/login', {body: JSON.stringify(user), method: 'POST'})
        const json = await data.json();
        if (data.status < 400) {
            alert(json)
            setTimeout(() => {
                window.location.href = "/dashboard", 2000
            })
        } else {
            alert(json.title)
        }
    }
    const {register, handleSubmit} = useForm<User>();

    return(
        <main>
            <div>
                <h1>Log In</h1>
                <form className="d-flex flex-column">
                    <Input className="w-auto" name="username" label="Nome de usuário"
                           placeholder="Digite o nome de usuário" register={register}/>
                    <Input className="w-auto" name="password" type="password"
                           label="Senha" placeholder="Digite a senha"
                           register={register}/>
                    <Button onClick={handleSubmit(login)} text="Entrar"/>
                </form>
            </div>
        </main>
    )
}