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
            <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h6 className="border-bottom pb-2 mb-0">Checklist</h6>
            <div className="border-bottom pb-2 mb-0">
                    {
                        list.map((list, key) => {
                            return(
                                <div className="d-flex text-body-secondary pt-3" key={key}>
                                    <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                        <div className="d-flex justify-content-between">
                                            <strong className="text-gray-dark">{list.name}</strong>
                                            <strong className="text-gray-dark">{list.lastUpdate.toUTCString()}</strong>
                                            <a href="#">Editar</a>
                                        </div>
                                        <span className="d-block">{list.description}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                <small className="d-block text-end mt-3">
                    <button className="btn btn-primary rounded-pill px-3">Adicionar</button>
                </small>
            </div>
            </div>
        )
    } else {
        return(
            <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h6 className="border-bottom pb-2 mb-0">Checklist</h6>
            <div className="border-bottom pb-2 mb-0">
                                <div className="d-flex text-body-secondary pt-3">
                                    <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                        <div className="d-flex justify-content-between">
                                            <strong className="text-gray-dark">Você não possui nenhum ckecklist</strong>
                                        </div>
                                    </div>
                                </div>
                <small className="d-block text-end mt-3">
                    <button className="btn btn-primary rounded-pill px-3">Adicionar</button>
                </small>
            </div>
            </div>
        )
    }
}