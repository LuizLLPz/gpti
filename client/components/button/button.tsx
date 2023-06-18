type ButtonProps = {
    text: string
    className?: string
    onClick: () => void
}



export function Button({text, className = '', onClick}: ButtonProps): JSX.Element {
    return (
        <button onClick={onClick} className={"rounded-4 bg-blue "+className}>{text}</button>
    );
}