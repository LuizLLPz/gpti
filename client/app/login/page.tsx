'use client';
import {useForm} from "react-hook-form";

import {Button, Input} from "@/components";
import {User, UserDTO} from "@/types";
import Link from "next/link";
import { usePageTitle } from "@/hooks";
import Header from "../header";

export default function Login() {
    async function login(model: User) {
        const user: UserDTO = {
            NOMEUSUARIO: model.username,
            SENHA: model.password
        }
        const data = await fetch('https://7f69-191-243-137-66.ngrok-free.app/Usuario/login', {body: JSON.stringify(user), method: 'POST'})
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
        <div className="">
        <Header />
        <div className="d-flex align-items-center py-4 bg-body-tertiary">
        <main className="form-signin mx-auto">
                <h1 className="h3 mb-3">Entrar</h1>
                <form className="gap-sm-4">
                    <Input name="username" 
                            label="Nome de usuário" 
                            placeholder="Digite o nome de usuário"
                            register={register}
                    />
                    <Input name="password" 
                            type="password" 
                            label="Senha" 
                            placeholder="Digite a senha" 
                            register={register}
                    />
                    <Button onClick={handleSubmit(login)} 
                            text="Entrar"
                            className="w-100"
                        />
                    <Link className="btn btn-outline-secondary w-100" href="/">Cancelar</Link>
                </form>
        </main>
        </div>
        </div>
    )
}