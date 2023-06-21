'use client';

import { useState } from "react";

import { Project } from "../../dashboard/types";
import Header from "@/app/header";
import ListProjetos from "../listProjetos";



export default function Compartilhados() {
    const [projects, setProjects] = useState<Project[]>()

    useState(() => {
            setTimeout(() => {
                setProjects([{name: "Projeto 1", description: "Descrição do projeto 1"}, {name: "Projeto 2", description: "Descrição do projeto 2"}, {name: "Projeto 2", description: "Descrição do projeto 2"}])
            }, 1000)
        })
    
    if(!projects) {
        return (
            <>
            <Header />
            <main className="container">
                    <div className="d-flex align-items-center p-3 my-3 text-white rounded shadow-sm" style={{background: "#0d6efd"}}>
                        <div className="lh-1">
                            <h1 className="h6 mb-0 text-white lh-1">Visualize os projetos</h1>
                            <h2>Compartilhados</h2>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center" style={{height:"calc(100vh - 50vh)"}}>
                        <div className="spinner-border text-primary" role="status">
                    </div>
                    {/* <span className="sr-only">Loading...</span> */}
                    </div>
            </main>
            </>
        )}else{
    return(
        <>
        <Header />
        <main className="container">
            <div className="d-flex align-items-center p-3 my-3 text-white rounded shadow-sm" style={{background: "#0d6efd"}}>
                <div className="lh-1">
                    <h1 className="h6 mb-0 text-white lh-1">Visualize os projetos</h1>
                    <h2>Compartilhados</h2>
                </div>
            </div>
            <section className="my-3 p-3 bg-body rounded shadow-sm">
                    <ListProjetos list={projects}>
                        {[{respnsavel:<span className="d-block">Pedro</span>, numCheckList: 1},{respnsavel:<span className="d-block">Vitor</span>, numCheckList:4}, {respnsavel:<span className="d-block">João</span>, numCheckList:2}]}
                    </ListProjetos>
                </section>
        </main>

        </>
    )
    }
    
}