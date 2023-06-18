'use client';

import { useEffect, useState } from "react";
import { Project } from "../../layout";

import Header from "../../header";

export default function Dashboard() {
    const [project, setProject] = useState<Project[]>([])

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
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" className="form-control" id="name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Descrição</label>
                <input type="text" className="form-control" id="description"/>
            </div>
            <button type="submit" className="btn btn-primary">Adicionar</button>
</form>

        </main>
        </>
    )
}