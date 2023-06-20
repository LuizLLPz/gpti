import { Project, ProjectDTO } from "../types";

export async function createProject(model: Project) {
    const project: ProjectDTO = {
        IDEMPRESA: 1,
        NOME: model.name,
        DESCRICAO: model.description,
    };
    const data = await fetch("http://localhost:80/Projeto/criarProjetos", {
        body: JSON.stringify(project),
        method: "POST",
        mode: "cors",
    });
    const json = await data.json();
    if (data.status < 400) {
        alert(json.message);
        setTimeout(() => {
            (window.location.href = "/dashboard"), 2000;
        });
    } else {
        alert(json.message);
    }
}

export async function getProjetosEmpresa(): Promise<Project[]> {
    const data = await fetch(
        "https://localhost:80/Projeto/obterProjetosEmpresa?IDEMPRESA=1"
    );
    const json = await data.json();
    const projetos: ProjectDTO[] = json.data;
    return projetos?.map((projeto: ProjectDTO) => ({
        id: projeto.ID,
        name: projeto.NOME,
        description: projeto.DESCRICAO,
    }));
}
