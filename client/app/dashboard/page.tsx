'use client';

import { useEffect, useState } from "react";
import { Checklist, Project, Auditoria } from "../layout";
import ListAuditoria from "./listAuditoria";
import ListCheckList from "./listChecklist";
import ListProjetos from "./listProjetos";
import Header from "../header";

export default function Dashboard() {
    const [project, setProject] = useState<Project[]>()
    const [checklist, setChecklist] = useState<Checklist[]>()
    const [auditoria, setAuditoria] = useState<Auditoria[]>()

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
        <>
        <Header />
        <main className="container">
                <div className="d-flex align-items-center p-3 my-3 text-white rounded shadow-sm" style={{background: "#0d6efd"}}>
                    <div className="lh-1">
                        <h1 className="h6 mb-0 text-white lh-1">Bem vindo,</h1>
                        <h2>Dashboard</h2>
                    </div>
                </div>
                <section className="my-3 p-3 bg-body rounded shadow-sm">
                    <ListProjetos list={project} eventOnClick={editar}/>
                </section>
                <section className="my-3 p-3 bg-body rounded shadow-sm">
                    <ListCheckList list={checklist} eventOnClick={editar}/>
                </section>
                <section>
                    <ListAuditoria list={auditoria} eventOnClick={editar}/>
                </section>
        </main>
        </>
    )
}