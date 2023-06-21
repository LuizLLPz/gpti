'use client';

import Link from "next/link";
import { MouseEventHandler, useState } from "react";

import { Project } from "@/app/dashboard/types";
import ModalEdit from "./modalEdit";

interface ListProjetosProps {
    list?: Project[],
    eventOnClick?: MouseEventHandler<HTMLButtonElement> | undefined,
    children?: {respnsavel: React.ReactNode, numCheckList: number}[]
}
export default function ListProjetos({list, eventOnClick, children}: ListProjetosProps) {
    const [show, setShow] = useState({show: false, nameProject: "", descriptionProject: ""});
    
    if(list && list.length > 0){
        return(
            <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h6 className="border-bottom pb-2 mb-0">Projetos</h6>
            <div className="border-bottom pb-2 mb-0">
                    {
                        list.map((project, key) => {
                            return(
                                <div className="d-flex text-body-secondary pt-3" key={key} onClick={() => 
                                    {
                                    if(show.show === false){
                                        setShow({show: true, nameProject: project.name, descriptionProject: project.description})
                                    }else{
                                        setShow({show: false, nameProject: project.name, descriptionProject: project.description})
                                    }
                                    }
                                }>
                                    <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                        <div className="d-flex justify-content-between">
                                            <strong className="text-gray-dark">{project.name}</strong>
                                            {children ? children[key].respnsavel : ""}
                                            {children ? "Checklists criadas: " + children[key].numCheckList : ""}
                                            <Link href="/dashboard/projeto">{children ? "": "Excluir"}</Link>
                                        </div>
                                        <span className="d-block">{project.description}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                <small className="d-block text-end mt-3">
                    <Link className="btn btn-primary rounded-pill px-3" href={children ? "/" : "dashboard/projeto"}>{children ? "Deixar de visualizar" : "Adicionar"}</Link>
                </small>
                <ModalEdit show={show}/>
            </div>
            </div>
        )
    } else {
        return(
            <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h6 className="border-bottom pb-2 mb-0">Projeto</h6>
            <div className="border-bottom pb-2 mb-0">
                                <div className="d-flex text-body-secondary pt-3">
                                    <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                        <div className="d-flex justify-content-between">
                                            <strong className="text-gray-dark">Você não possui nenhum projeto</strong>
                                        </div>
                                    </div>
                                </div>
                <small className="d-block text-end mt-3">
                    <Link className="btn btn-primary rounded-pill px-3" href="dashboard/projeto">Adicionar</Link>
                </small>
            </div>
            </div>
        )
    }
}