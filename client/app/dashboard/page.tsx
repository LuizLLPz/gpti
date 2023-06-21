'use client';

import { useEffect, useState } from "react";

import { Checklist, Project} from "@/app/dashboard/types";

import { Auditoria } from "../layout";

import ListAuditoria from "./listAuditoria";
import ListCheckList from "./listChecklist";
import ListProjetos from "./listProjetos";
import Header from "../header";
import { getProjetosEmpresa, getChecklistsEmpresa } from "@/app/dashboard/services";

export default function Dashboard() {
    const [projects, setProjects] = useState<Project[]>()
    const [checklists, setChecklists] = useState<Checklist[]>()
    const [auditoria, setAuditoria] = useState<Auditoria[]>()
    const [errorLoading, setErrorLoading] = useState<boolean>(false)

    useEffect(() => {
        async function fetchData() {
            setProjects(await getProjetosEmpresa())
            setChecklists(await getChecklistsEmpresa())
        }
        // setTimeout(() => {
        //     setProjects([])
        //     setChecklists([])
        //     setAuditoria([{name: "Auditoria 1", description: "Descrição da auditoria 1", date: new Date(), project: {name: "Projeto 1", description: "Descrição do projeto 1"}}, {name: "Auditoria 2", description: "Descrição da auditoria 2", date: new Date(), project: {name: "Projeto 2", description: "Descrição do projeto 2"}}])
        // }, 1000)
        fetchData()
        .catch((err) => {
            console.log("Caiu no catch")
            setErrorLoading(false)
            console.log(errorLoading)
            setAuditoria([])
            setChecklists([])
            setProjects([])

        })
    }, [])

    function editar(){
        console.log("Editar")
    }

    if(errorLoading) {
        return (
            <>
            <Header />
            <main className="container">
                    <div className="d-flex align-items-center p-3 my-3 text-white rounded shadow-sm" style={{background: "#0d6efd"}}>
                        <div className="lh-1">
                            <h1 className="h6 mb-0 text-white lh-1">Bem vindo,</h1>
                            <h2>Dashboard</h2>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center" style={{height:"calc(100vh - 50vh)"}}>
                        <div className="alert alert-danger" role="alert">
                            Erro ao carregar dados
                        </div>
                    </div>
            </main>
            </>
        )
    }
    if(!projects || !checklists || !auditoria) {
        return (
            <>
            <Header />
            <main className="container">
                    <div className="d-flex align-items-center p-3 my-3 text-white rounded shadow-sm" style={{background: "#0d6efd"}}>
                        <div className="lh-1">
                            <h1 className="h6 mb-0 text-white lh-1">Bem vindo,</h1>
                            <h2>Dashboard</h2>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center" style={{height:"calc(100vh - 50vh)"}}>
                        <div className="spinner-border text-primary" role="status">
                    </div>
                    {/* <span className="sr-only">Loading...</span> */}
                    </div>
            </main>
            </>
        )
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
                    <ListProjetos list={projects} eventOnClick={editar}/>
                </section>
                <section className="my-3 p-3 bg-body rounded shadow-sm">
                    <ListCheckList list={checklists} eventOnClick={editar}/>
                </section>
                <section>
                    <ListAuditoria list={auditoria} eventOnClick={editar}/>
                </section>
        </main>
        </>
    )
}