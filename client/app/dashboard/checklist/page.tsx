'use client';

import {ChangeEvent, useEffect, useState} from "react";
import { useForm } from "react-hook-form";

import { Button, Input } from "@/components";
import { Checklist } from "@/app/dashboard/types";
import { getProjetosEmpresa, saveChecklist } from "@/app/dashboard/services";

import Header from "../../header";
import ItensChecklist from "./itensChecklist";
import {ChecklistItem, Project} from "../types";

export interface listCheck {
    item: string,
}

export default function Checklist() {
    const [projects, setProjects] = useState<Project[]>()
    const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([])
    const [item, setItem] = useState<string>("")
    const { handleSubmit, register,
        setValue } = useForm<Checklist>()


    function adicionarList(novoItem: string){
        const item: ChecklistItem = {
            title: novoItem
        }
        setValue("checklistItems", [...checklistItems, item])
        setChecklistItems([...checklistItems, item])
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
            </div>
            <div className="mb-3">
                <Input name="description" label="Descrição" placeholder="" type="text" register={register}/>
            </div>
            <div className="mb-3">
                <label htmlFor="project" className="form-label">Projeto</label>
                <select className="form-select" aria-label="Default select example" id="project"
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setValue("projectID", Number.parseInt(e.target.value))}
                >
                    <option selected={true}>Selecione um projeto</option>
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
                <button type="button" className="btn btn-primary" onClick={() => item && adicionarList(item)}>
                    Adicionar no checklist</button>
                <ItensChecklist list={checklistItems}/>
                
            </div>
            <Button text="Adicionar" className="btn btn-primary" onClick={handleSubmit(saveChecklist)}/>
        </form>

        </main>
        </>
    )
}