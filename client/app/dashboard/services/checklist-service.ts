import { Checklist, ChecklistDTO, ChecklistItem } from "@/app/dashboard/types";

export async function saveChecklist(model: Checklist) {
    const checklist: ChecklistDTO = {
        IDEMPRESA: 1,
        IDPROJETO: model.projectID,
        CHECKLISTITENS: model.checklistItems?.map((item: ChecklistItem) => ({
            TITULO: item.title,
        })),
        NOME: model.name,
        DESCRICAO: model.description,
    };
    const data = await fetch(
        "http://localhost:80/Checklist/criarChecklist?XDEBUG_SESSION_START=11465",
        { body: JSON.stringify(checklist), method: "POST", mode: "cors" }
    );
    const json = await data.json();

    if (data.status < 400) {
        alert(json.message);
        setTimeout(() => (window.location.href = "/dashboard"), 2000);
    } else {
        alert(json.message);
    }
}

export async function getChecklistsEmpresa(): Promise<Checklist[]> {
    const data = await fetch(
        "http://localhost:80/Checklist/getChecklistsEmpresa?IDEMPRESA=1&XDEBUG_SESSION_START=11465?"
    );
    const json = await data.json();
    const checklists: ChecklistDTO[] = json.data;
    return checklists.map((checklist: ChecklistDTO) => ({
        id: checklist.ID,
        companyID: checklist.IDEMPRESA,
        projectID: checklist.IDPROJETO,
        name: checklist.NOME,
        description: checklist.DESCRICAO,
    }));
}
