import {FieldValues, Path, UseFormRegister} from "react-hook-form";

type InputProps<T> = {
    name: Path<T extends FieldValues ? any : any>;
    label: string
    placeholder: string
    register: UseFormRegister<T extends FieldValues ? any : any>;
    type?: React.InputHTMLAttributes<T>
}

export function Input<T>({name, label, placeholder, register, type}: InputProps<T>): JSX.Element {
    return (
        <div className="d-flex w-25 gap-2">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...register(name)}/>
        </div>);
}