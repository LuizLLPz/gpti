import Link from "next/link";
import {useForm} from "react-"

export default function Singin() {



    return(
        <main>
            <div>
                <h1>Cadastro</h1>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <button type="submit">Log In</button>
                </form>
            </div>
            <Link href={"/"}>Cancelar</Link>
        </main>
    )
}