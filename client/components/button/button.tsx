type ButtonProps = {
    text: string
    className?: string
    onClick?: () => void
}



export function Button({text, className = '', onClick}: ButtonProps): JSX.Element {
    return (
        <button onClick={onClick} className={"btn btn-primary w-100 py-2 my-3 "+className}>{text}</button>
    );
}