'use client';

import { useEffect, useState } from "react";
import { Checklist } from "../../layout";

import Header from "../../header";
import { Project } from "../types";
import ItensChecklist from "./itensChecklist";

export interface listCheck {
    item: string,
}

export default function Checklist() {
    const [project, setProject] = useState<Project[]>()
    const [ckecklist, setChecklist] = useState<Checklist[]>()
    const [listChecklist, setListChecklist] = useState<listCheck[]>()
    const [item, setItem] = useState<string>("")

    function adicionarList(novoItem: listCheck){
        if(listChecklist){
            setListChecklist([...listChecklist, novoItem])
        }
    }
        

    useEffect(
        () => {
        setTimeout(() => {
            setProject([{name: "Projeto 1", description: "Descrição do projeto 1"}, {name: "Projeto 2", description: "Descrição do projeto 2"}, {name: "Projeto 3", description: "Descrição do projeto 3"}])
            setChecklist([{name: "Checklist 1", description: "Descrição do checklist 1", lastUpdate: new Date(), project: {name: "Projeto 1", description: "Descrição do projeto 1"}}, {name: "Checklist 2", description: "Descrição do checklist 2", lastUpdate: new Date(), project: {name: "Projeto 2", description: "Descrição do projeto 2"}}])
        })}, [])

    return(
        <>
        <Header />
        <main className="container">
        <h1>Checklist</h1>
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" className="form-control" id="name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Descrição</label>
                <input type="text" className="form-control" id="description"/>
            </div>
            <div className="mb-3">
                <label htmlFor="project" className="form-label">Projeto</label>
                <select className="form-select" aria-label="Default select example" id="project">
                    <option selected>Selecione um projeto</option>
                    {
                        project?.map((project) => {
                            return(
                                <option value={project.name}>{project.name}</option>
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
            <button type="submit" className="btn btn-primary">Adicionar</button>
        </form>

        </main>
        </>
    )
}