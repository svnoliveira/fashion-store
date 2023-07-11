export const LoginForm = () => {
    return (
        <form>
            <h1>LOGIN</h1>
            <input type="email"  placeholder="E-MAIL"/>
            <input type="password" placeholder="PASSWORD"/>
            <div>
                <button type="submit">ACCESS</button>
                <button type="button">REGISTER</button>
            </div>
        </form>
    )
}