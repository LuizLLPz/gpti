'use client';

import { useEffect, useState } from "react";
import { Button, Input } from "@/components";

import Header from "../../header";
import {useForm} from "react-hook-form";
import {createProject} from "../services/projeto-service"
import {Project, ProjectDTO} from "@/app/dashboard/types";
import Link from "next/link";

export default function Projeto() {
    const {register, handleSubmit} = useForm<Project>();

    return(
        <>
        <Header />
        <main className="container">
        <div className="d-flex align-items-center p-3 my-3 text-white rounded shadow-sm" style={{background: "#0d6efd"}}>
            <div className="lh-1">
                <h1 className="h1 mb-0 text-white lh-1">Projetos,</h1>
                <h2 className="h6">Adicione novos projetos</h2>
            </div>
        </div>
        <form>
        <Input name="name" label="Nome" placeholder="" register={register}/>
        <Input name="description" label="Descrição" placeholder="" register={register}/>
        <Button text="Adicionar" onClick={handleSubmit(createProject)}/>
        <Link href="/dashboard" className="btn ms-2 btn-outline-secondary">Cancelar</Link>
        {/*<button type="submit" className="btn btn-primary">Adicionar</button>*/}
</form>

        </main>
        </>
    )
}