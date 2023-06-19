'use client';

import { ChangeEvent, useEffect, useState } from "react";
import { Button, Input } from "@/components";

import Header from "../../header";
import {useForm} from "react-hook-form";
import {createProject} from "../services/projeto-service"
import {Checklist, Project, ProjectDTO} from "@/app/dashboard/types";
import Link from "next/link";
import ItensAuditoria from "./itensAuditoria";

export default function Projeto() {
    const [projects, setProjects] = useState<Project[]>()
    const [checklists, setChecklists] = useState<Checklist[]>()
    const { handleSubmit, register,
        setValue } = useForm<Checklist>()

    return(
        <>
        <Header />
        <main className="container">
        <div className="d-flex align-items-center p-3 my-3 text-white rounded shadow-sm" style={{background: "#0d6efd"}}>
            <div className="lh-1">
                <h1 className="h1 mb-0 text-white lh-1">Auditorias,</h1>
                <h2 className="h6">Realize as auditorias</h2>
            </div>
        </div>
        <form>
        <Input name="name" label="Nome" placeholder="" register={register}/>
        <Input name="description" label="Descrição" placeholder="" register={register}/>
        <Input name="date" label="Data" placeholder="" register={register}/>
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
        <label htmlFor="project" className="form-label">Checklist</label>
        <select className="form-select" aria-label="Default select example" id="project"
                //VER COMO FAZ ISSO!!!
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setValue("projectID", Number.parseInt(e.target.value))}
        >
            <option selected={true}>Selecione um checklist</option>
            {
                checklists?.map((project) => {
                    return(
                        <option  key={project.id} value={project.id}>{project.name}</option>
                    )
                })
            }
        </select>
        </div>
        <ItensAuditoria list={[{title: "A", id:1, check:false},{title: "A", id:1, check:false}, {title: "A", id:1, check:false}]}/>
        <Button text="Adicionar" onClick={handleSubmit(createProject)}/>
        <Link href="/dashboard" className="btn ms-2 btn-outline-secondary">Cancelar</Link>
</form>

        </main>
        </>
    )
}