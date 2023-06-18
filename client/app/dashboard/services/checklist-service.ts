import {Checklist, ChecklistDTO} from "@/app/dashboard/types";

async function createChecklist(model: Checklist) {
    const checklist: ChecklistDTO = {
        IDPROJETO: model.projectID,
        NOME: model.name,
        DESCRICAO: model.description
    }

    const data = await fetch('https://7f69-191-243-137-66.ngrok-free.app/Projeto/criarProjeto?XDEBUG_SESSION_START=11465',
        {body: JSON.stringify(checklist), method: 'POST'})
    const json = await data.json();
    if (data.status < 400) {
        alert(json.message)
        setTimeout(() => {
            window.location.href = "/dashboard", 2000
        })
    }
    else {
        alert(json.message)
    }
}