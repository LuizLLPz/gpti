'use client';
import {useForm} from "react-hook-form";

import {Button, Input} from "@/components";
import {User, UserDTO} from "@/types";
import Link from "next/link";
import { usePageTitle } from "@/hooks";

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
        <div className="d-flex align-items-center py-4 bg-body-tertiary">
        <main className="form-signin w-90 m-auto">
                <form className="gap-sm-4">
                <h1 className="h3 mb-3 fw-normal">Log In</h1>
                    <Input name="username" label="Nome de usuário"
                           placeholder="Digite o nome de usuário"
                            register={register}
                            />
                    <Input name="password" type="password" label="Senha" placeholder="Digite a senha" register={register}/>
                    <Button onClick={handleSubmit(login)} text="Entrar"/>
                    <Link className="btn btn-outline-secondary w-100" href="/">Cancelar</Link>
                </form>
        </main>
        </div>
    )
}