'use client'

import Link from "next/link"

export default function Header() {
    return(
        <div className="container w-100">
        <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a href="/" className="nav-link active">Home</a>
                </li>
                <li className="nav-item">
                    <Link href="/register" className="nav-link">Cadastro</Link>
                </li>
                <li className="nav-item">
                    <Link href="/login" className="nav-link">Entrar</Link>
                </li>
                <li className="nav-item">
                    <Link href="/dashboard" className="nav-link">Dashboard</Link>
                </li>
            </ul>
        </header>
        </div>
    )
}