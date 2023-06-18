type ButtonProps = {
    text: string
    className?: string
    onClick: () => void
}



export function Button({text, className = '', onClick}: ButtonProps): JSX.Element {
    return (
        <button
            onClick={onClick} className={"rounded-2 bg-blue py-2 px-3 bg-primary text-light border-0 "
            + className}>{text}</button>
    );
}