'use client';
import {useForm} from "react-hook-form";

import {Button, Input} from "@/components";
import {User, UserDTO} from "@/types";
import {usePageTitle} from "@/hooks";

export default function Login() {
    async function login(model: User) {
        const user: UserDTO = {
            NOMEUSUARIO: model.username,
            SENHA: model.password
        }
        const data = await fetch('http://localhost:80/Usuario/login', {body: JSON.stringify(user), method: 'POST'})
        const json = await data.json();
        if (data.status < 400) {
            alert("Login realizado com sucesso!")
            sessionStorage.setItem('user', json.token)
            setTimeout(() => {
                window.location.href = "/dashboard", 2000
            })
        } else {
            alert(json.title)
        }
    }
    usePageTitle("Login")
    const {register, handleSubmit} = useForm<User>();

    return(
        <main>
            <div className="px-4 py-2">
                <h1>Log In</h1>
                <form className="d-flex flex-column col-md-5 gap-2">
                    <Input className="w-auto" name="username" label="Nome de usuário"
                           placeholder="Digite o nome de usuário" register={register}/>
                    <Input className="w-auto" name="password" type="password"
                           label="Senha" placeholder="Digite a senha"
                           register={register}/>
                    <div>
                        <Button onClick={handleSubmit(login)} text="Entrar" className="col-sm-4"/>
                    </div>
                </form>
            </div>
        </main>
    )
}