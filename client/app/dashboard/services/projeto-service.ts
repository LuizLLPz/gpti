import {Project, ProjectDTO} from '../types';

export async function createProject(model: Project) {
    const project: ProjectDTO = {
        NOME: model.name,
        DESCRICAO: model.description,
        IDEMPRESA: 1
    }
    const response = await fetch('http://localhost:3000/projeto/', {
        method: 'POST',
        body: JSON.stringify(project),
    })

}