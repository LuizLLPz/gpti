import {Button, Input} from "@/components";

import "./styles.css"
import {Project} from "../../types/project";
import {useForm} from "react-hook-form";

type ProjetoModalProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleOnSubmitProject: () => void;
}

export function ProjetoModal({isOpen, setIsOpen, handleOnSubmitProject}: ProjetoModalProps): JSX.Element {
    const {register, handleSubmit} = useForm<Project>();


    return (
        <>
        {isOpen &&
            <div className="projetoModal">
                <h1>Criar projeto</h1>
                <Input name="name" label="Nome" placeholder="Digite o nome do projeto"
                       register={register}/>
                <Input name="description" label="Descrição" placeholder="Digite a descrição do projeto"
                       register={register}/>
                <Button text="Salvar projeto" onClick={handleSubmit(handleOnSubmitProject)}/>
            </div>
        }
        </>
    )
}