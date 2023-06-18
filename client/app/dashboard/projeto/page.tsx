'use client';

import { useEffect, useState } from "react";
import { Button, Input } from "@/components";

import Header from "../../header";
import {useForm} from "react-hook-form";
import {Project, ProjectDTO} from "@/app/dashboard/types";

export default function Dashboard() {
    const [project, setProject] = useState<Project[]>([])

    const {register, handleSubmit} = useForm<Project>();

    async function submitProject(model: Project) {
        const project: ProjectDTO = {
            IDEMPRESA: 1,
            NOME: model.name,
            DESCRICAO: model.description
        }
        const data = await fetch('https://7f69-191-243-137-66.ngrok-free.app/Projeto/criarProjeto?XDEBUG_SESSION_START=11465',
            {body: JSON.stringify(project), method: 'POST'})
        const json = await data.json();
        if (data.status < 400) {
            alert(json.message)
            setTimeout(() => {
                window.location.href = "/dashboard", 2000
            })
        }
        else {
            alert(json.message)
        }
    }

    useEffect(
        () => {
        setTimeout(() => {
            setProject([{name: "Projeto 1", description: "Descrição do projeto 1"}, {name: "Projeto 2", description: "Descrição do projeto 2"}])
        })
    }, [])

    return(
        <>
        <Header />
        <main className="container">
        <form>
            <div className="mb-3">
                <Input name="name" label="Nome:" placeholder="" register={register}/>
                {/*<label htmlFor="name" className="form-label">Nome</label>*/}
                {/*<input type="text" className="form-control" id="name"/>*/}
            </div>
            <div className="mb-3">
                <Input name="description" label="Descrição:" placeholder="" register={register}/>
                {/*<label htmlFor="description" className="form-label">Descrição</label>*/}
                {/*<input type="text" className="form-control" id="description"/>*/}
            </div>
            <Button text="Adicionar" onClick={handleSubmit(submitProject)}/>
            {/*<button type="submit" className="btn btn-primary">Adicionar</button>*/}
</form>

        </main>
        </>
    )
}