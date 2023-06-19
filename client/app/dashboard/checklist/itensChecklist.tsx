import {ChecklistItem} from "@/app/dashboard/types";
import { MouseEventHandler } from "react";
import ListCheckList from "../listChecklist";

export interface ItensChecklistProps {
    list?: ChecklistItem[],
    excluirItem?: any,
    excluirAll?: any,
}

export default function ItensChecklist({list, excluirItem, excluirAll}: ItensChecklistProps) {
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
                                        <a style={{cursor:"pointer"}} onClick={(e) => excluirItem(e, item)}>Excluir</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                <small className="d-block text-end mt-3">
                    <button onClick={(e) => excluirAll(e)} className="btn btn-primary rounded-pill px-3">Excluir todos os itens</button>
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
                                <strong className="text-gray-dark">Nenhum item adicionado</strong>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        )
    }
}
