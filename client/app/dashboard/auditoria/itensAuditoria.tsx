'use client';

import { useEffect, useState } from "react";
import {ChecklistItem} from "../types";
import { set } from "react-hook-form";
export interface ItensChecklistProps {
    list: ChecklistItem[]
}

export default function ItensAuditoria({list}: ItensChecklistProps) {
    const [listAuditoria, setListAuditoria] = useState<ChecklistItem[]>(list)


    useEffect(() => {
        listAuditoria.map((item) => {
            setListAuditoria([...listAuditoria, {id: item.id, check: false, title: item.title} as ChecklistItem])
        })
    }, [])




    if(list){
    return(
        <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0">Lista dos itens</h6>
        <div className="border-bottom pb-2 mb-0">
                {
                    list.map((item, key) => {
                        return(
                            <div className="d-flex text-body-secondary pt-3" key={key}>
                                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                    <div className="d-flex justify-content-between">
                                        <strong className="text-gray-dark">{item.title}</strong>
                                        <option className="form-check-input" typeof="checkbox" id="flexCheckDefault" aria-checked={item.check}/>
                                        <a style={{cursor:"pointer"}}>Excluir</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                <small className="d-block text-end mt-3">
                    <button className="btn btn-primary rounded-pill px-3">Desmarcar todos os itens todos os itens</button>
                </small>
        </div>
        </div>
    )
    } else {
        return(
            <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h6 className="border-bottom pb-2 mb-0">Lista dos itens</h6>
            <div className="border-bottom pb-2 mb-0">
                    <div className="d-flex text-body-secondary pt-3">
                        <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                            <div className="d-flex justify-content-between">
                                <strong className="text-gray-dark">Selecione um projeto e um checklist</strong>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        )
    }
}

