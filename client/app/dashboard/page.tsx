'use client';

import { useEffect, useState } from "react";
import { Checklist, Project, Auditoria } from "../layout";
import ListAuditoria from "./listAuditoria";
import ListCheckList from "./listChecklist";
import ListProjetos from "./listProjetos";

export default function Dashboard() {
    const [project, setProject] = useState<Project[]>([])
    const [checklist, setChecklist] = useState<Checklist[]>([])
    const [auditoria, setAuditoria] = useState<Auditoria[]>([])

    useEffect(() => {
        setTimeout(() => {
            setProject([{name: "Projeto 1", description: "Descrição do projeto 1"}, {name: "Projeto 2", description: "Descrição do projeto 2"}])
            setChecklist([{name: "Checklist 1", description: "Descrição do checklist 1", lastUpdate: new Date(), project: {name: "Projeto 1", description: "Descrição do projeto 1"}}, {name: "Checklist 2", description: "Descrição do checklist 2", lastUpdate: new Date(), project: {name: "Projeto 2", description: "Descrição do projeto 2"}}])
            setAuditoria([{name: "Auditoria 1", description: "Descrição da auditoria 1", date: new Date(), project: {name: "Projeto 1", description: "Descrição do projeto 1"}}, {name: "Auditoria 2", description: "Descrição da auditoria 2", date: new Date(), project: {name: "Projeto 2", description: "Descrição do projeto 2"}}])
        }, 1000)
    }, [])



    function editar(){
        console.log("Editar")
    }

    return(
        <main>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"></div>
            <div>
                <h1>Dashboard</h1>
                <section>
                    <h2>Projetos</h2>
                    <button>Novo projeto</button>
                    <ListProjetos list={project} eventOnClick={editar}/>
                </section>
                <section>
                    <h2>Checklists</h2>
                    <button>Novo checklist</button>
                    <ListCheckList list={checklist} eventOnClick={editar}/>
                </section>
                <section>
                    <h2>Auditoria</h2>
                    <button>Nova auditoria</button>
                    <ListAuditoria list={auditoria} eventOnClick={editar}/>
                </section>
            </div>
        </main>
    )
}