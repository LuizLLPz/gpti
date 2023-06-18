import { listCheck } from "./page"

export interface ItensChecklistProps {
    list?: listCheck[]
}

export default function ItensChecklist({list}: ItensChecklistProps) {
    if(list){
    return(
        <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0">Lista dos itens</h6>
        <div className="border-bottom pb-2 mb-0">
                {
                    list.map((list, key) => {
                        return(
                            <div className="d-flex text-body-secondary pt-3" key={key}>
                                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                    <div className="d-flex justify-content-between">
                                        <strong className="text-gray-dark">{list.item}</strong>
                                        <a href="#">Excluir</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
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
