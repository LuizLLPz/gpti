import { use, useEffect, useState } from "react"

interface ModalEditProps {
    show: {show: boolean, nameProject: string, descriptionProject: string},
}
export default function ModalEdit({show}: ModalEditProps){
    console.log(show)
    const [name, setName] = useState(show.nameProject)
    const [description, setDescription] = useState(show.descriptionProject)

    useEffect(() => {
        setName(show.nameProject)
        setDescription(show.descriptionProject)
    }, [show])


    return(
        <div className={show.show ? "" : "modal fade"} id="modalEdit" >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalEditLabel">Editar Projeto</h5>
                </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="name" placeholder="Nome do projeto" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Descrição</label>
                                <input className="form-control" id="description"  placeholder="Descrição do projeto" value={description} onChange={(e) => setDescription(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Salvar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
    


}