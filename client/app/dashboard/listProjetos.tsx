'use client';

import { MouseEventHandler } from "react";
import { Project } from "../layout";

interface ListProjetosProps {
    list: Project[],
    eventOnClick: MouseEventHandler<HTMLButtonElement> | undefined
}
export default function ListProjetos({list, eventOnClick}: ListProjetosProps) {
    if(list.length > 0){
        return(
            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Descrição</td>
                        <td>Editar</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((project, key) => {
                            return(
                                <tr key={key}>
                                    <td>{project.name}</td>
                                    <td>{project.description}</td>
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
            <h3>Não possui projeto</h3>
        )
    }
}