import {FieldValues, Path, UseFormRegister} from "react-hook-form";
import {HTMLInputTypeAttribute} from "react";

type InputProps<T> = {
    name: Path<T extends FieldValues ? any : any>;
    label: string
    placeholder: string
    className?: string
    register?: UseFormRegister<T extends FieldValues ? any : any>;
    type?: HTMLInputTypeAttribute
}

export function Input<T>({name, label, placeholder, className = '', register, type}: InputProps<T>): JSX.Element {
    return (
        <div className={"form-floating"}>
            <input className="form-control" type={type} id={name} placeholder={placeholder} 
            // {...register(name)}
            />
            <label htmlFor={name}>{label}</label>
        </div>);
}
