export default function Login() {
    return(
        <main>
            <div>
                <h1>Log In</h1>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <button type="submit">Log In</button>
                </form>
            </div>
        </main>
    )
}