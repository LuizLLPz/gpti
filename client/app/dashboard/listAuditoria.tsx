'use client';
import { ArrowFunction } from "typescript";
import { Auditoria, Project } from "../layout";
import { MouseEventHandler } from "react";


interface ListAuditoriaProps {
    list: Auditoria[],
    eventOnClick: MouseEventHandler<HTMLButtonElement> | undefined
}

export default function ListAuditoria({list, eventOnClick}: ListAuditoriaProps) {
    if(list.length){
        return(
            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Descrição</td>
                        <td>Data de aplicação</td>
                        <td>Projeto</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((auditoria, key) => {
                            return(
                                <tr key={key}>
                                    <td>{auditoria.name}</td>
                                    <td>{auditoria.description}</td>
                                    <td>{auditoria.date.toUTCString()}</td>
                                    <td>{auditoria.project.name}</td>
                                    <td><button onClick={eventOnClick}>Editar</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    } else {
        return(
            <h3>Não possui auditoria</h3>
        )
    }
}