'use client';

import {ChangeEvent, useEffect, useState} from "react";
import { useForm } from "react-hook-form";

import { Button, Input } from "@/components";
import { getProjetosEmpresa, saveChecklist } from "@/app/dashboard/services";

import { Checklist } from "../../layout";
import Header from "../../header";
import ItensChecklist from "./itensChecklist";
import { Project } from "../types";



export interface listCheck {
    item: string,
}

export default function Checklist() {
    const [projects, setProjects] = useState<Project[]>()
    const [ckecklist, setChecklist] = useState<Checklist[]>()
    const [listChecklist, setListChecklist] = useState<listCheck[]>()
    const [item, setItem] = useState<string>("")
    const { handleSubmit, register,
        setValue } = useForm<Checklist>()


    function adicionarList(novoItem: listCheck){
        if(listChecklist){
            setListChecklist([...listChecklist, novoItem])
        }
    }

    useEffect(() => {
        async function fetchData() {
            setProjects(await getProjetosEmpresa())
        }
        fetchData()
    }, [])

    return(
        <>
        <Header />
        <main className="container">
        <h1>Checklist</h1>
        <form>
            <div className="mb-3">
                <Input name="name" label="Nome" placeholder="" type="text" register={register}/>
                {/*<label htmlFor="name" className="form-label">Nome</label>*/}
                {/*<input type="text" className="form-control" id="name"/>*/}
            </div>
            <div className="mb-3">
                <Input name="description" label="Descrição" placeholder="" type="text" register={register}/>
                {/*<label htmlFor="description" className="form-label">Descrição</label>*/}
                {/*<input type="text" className="form-control" id="description"/>*/}
            </div>
            <div className="mb-3">
                <label htmlFor="project" className="form-label">Projeto</label>
                <select className="form-select" aria-label="Default select example" id="project"
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setValue("projectID", Number.parseInt(e.target.value))}
                >
                    {
                        projects?.map((project) => {
                            return(
                                <option  key={project.id} value={project.id}>{project.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="add" className="form-label">Adicionar Item</label>
                <input type="text" className="form-control" id="add" value={item} onChange={(e) => setItem(e.target.value)}/>
                <button type="button" className="btn btn-primary" onClick={() => item ? adicionarList({item: item}) : console.log("nada")}>Adicionar no checklist</button>
                <ItensChecklist list={listChecklist}/>
                
            </div>
            <Button text="Adicionar" className="btn btn-primary" onClick={handleSubmit(saveChecklist)}/>
        </form>

        </main>
        </>
    )
}