export type Checklist = {
    id?: number;
    companyID: number;
    projectID: number;
    name: string;
    checklistItems?: ChecklistItem[];
    description: string;
}

export type ChecklistDTO = {
    ID?: number;
    IDEMPRESA: number;
    IDPROJETO: number;
    NOME: string;
    CHECKLISTITENS?: ChecklistItemDTO[];
    DESCRICAO: string;
}

export type ChecklistItem = {
    id?: number;
    checklistID?: number;
    title: string;
}

export type ChecklistItemDTO = {
    ID?: number;
    IDCHECKLIST?: number;
    TITULO: string;
}