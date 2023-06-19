'use client';

import {ChangeEvent, MouseEventHandler, useEffect, useState} from "react";
import { useForm } from "react-hook-form";

import { Button, Input } from "@/components";
import { Checklist } from "@/app/dashboard/types";
import { getProjetosEmpresa, saveChecklist } from "@/app/dashboard/services";

import Header from "../../header";
import ItensChecklist from "./itensChecklist";
import {ChecklistItem, Project} from "../types";
import Link from "next/link";

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
        console.log(novoItem)
        const item: ChecklistItem = {
            id: Math.random(),
            checklistID: Math.random(),
            title: novoItem
        }
        setValue("checklistItems", [...checklistItems, item])
        setChecklistItems([...checklistItems, item])
    }
    const excluirList = (e: any | undefined, item?: ChecklistItem) => {
        if(e){
            e.preventDefault()
        }
        if(!item){
            setChecklistItems([])
        }else{
            const newList = checklistItems.filter((list) => list.id !== item.id)
            setValue("checklistItems", newList)
            setChecklistItems(newList)
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
        <div className="d-flex align-items-center p-3 my-3 text-white rounded shadow-sm" style={{background: "#0d6efd"}}>
            <div className="lh-1">
                <h1 className="h1 mb-0 text-white lh-1">Checklist,</h1>
                <h2 className="h6">Crie listas para seus projetos</h2>
            </div>
        </div>
        <form>
            <Input name="name" label="Nome" placeholder="" type="text" register={register}/>
            <Input name="description" label="Descrição" placeholder="" type="text" register={register}/>
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
                <button type="button" className="btn btn-primary py-2 my-3" onClick={() => item && adicionarList(item)}>
                    Adicionar no checklist</button>
                <ItensChecklist excluirItem={excluirList} list={checklistItems} excluirAll={excluirList}/>
                
            </div>
            <div className="" style={{width:"100%"}}>
                <Button text="Adicionar" onClick={handleSubmit(saveChecklist)}/>
                <Link href={"/dashboard"} className="btn mt-auto mb-auto ms-3 btn-outline-secondary">Cancelar</Link>
            </div>
        </form>

        </main>
        </>
    )
}