'use client';
import Link from "next/link";
import {useForm} from "react-hook-form"

import {User, UserDTO} from "./types/user";


import {Button, Input} from "@/components";

export default function Register() {

    const {register, handleSubmit} = useForm<User>();

    async function registerUser(model: User) {
        const user: UserDTO = {
            NOMEUSUARIO: model.username,
            NOME: model.name,
            SOBRENOME: model.surname,
            SENHA: model.password
        }
        const data = await fetch('http://localhost:80/Usuario/cadastro', {body: JSON.stringify(user), method: 'POST'})
        const json = await data.json();
        if (data.status < 400) {
            alert(json)
            setTimeout(() => {
                window.location.href = "/login", 2000
            })
        } else {
            alert(json.title)
        }
    }

    return (
        <main>
            <div className="px-4 py-2">
                <h1>Cadastro</h1>
                <form className="d-flex flex-column gap-2">
                    <Input name="username" label="Nome de usuário" placeholder="Digite o nome de usuário"
                           register={register}/>
                    <div className="d-flex flex-row gap-sm-4 flex-wrap">
                        <Input className="flex-sm-grow-1" name="name" label="Nome" placeholder="Digite o primeiro nome"
                               register={register}/>
                        <Input className="flex-sm-grow-1" name="surname" label="Sobrenome"
                               placeholder="Digite o sobrenome" register={register}/>
                    </div>
                    <div>
                        <Input name="password" label="Senha" placeholder="Digite a sua senha"
                               type="password" register={register}/>
                    </div>
                    <Button onClick={handleSubmit(registerUser)} text="Cadastrar"/>
                </form>
            </div>
            <Link href={"/"}>Cancelar</Link>
        </main>
    )
}