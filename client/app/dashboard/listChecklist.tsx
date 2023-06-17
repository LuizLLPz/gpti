'use Client';

import { MouseEventHandler } from "react";
import { Checklist } from "../layout";

interface ListChecklistProps {
    list: Checklist[],
    eventOnClick: MouseEventHandler<HTMLButtonElement> | undefined
}

export default function ListCheckList({list, eventOnClick}:ListChecklistProps) {
    if(list.length > 0){
        return(
            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Descrição</td>
                        <td>Última atualização</td>
                        <td>Projeto</td>
                        <td>Editar</td>
                    </tr>
                </thead>
                <tbody>
                    {

                        list ?
                        list.map((checklist, key) => {
                        return(
                            <tr key={key}>
                                <td>{checklist.name}</td>
                                <td>{checklist.description}</td>
                                <td>{checklist.lastUpdate.toUTCString()}</td>
                                <td>{checklist.project.name}</td>
                                <td><button onClick={eventOnClick}>Editar</button></td>
                            </tr>
                        )
                        }) : <tr><td colSpan={5}>Nenhum checklist encontrado</td></tr>
                    }
                </tbody>
            </table>
        )
    } else {
        return(
            <div>
                <h3>Não possui chacklist</h3>
            </div>
        )
    }
}