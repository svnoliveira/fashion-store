export const RegisterForm = () => {
    return (
        <form>
            <button type="button">
                <img src="" alt="Back arrow - icon" />
                <span>BACK</span>
            </button>
            <h1>REGISTER</h1>
            <span>Welcome, Administrator!</span>
            <div>
                <input type="text" placeholder="NAME" />
                <input type="email" placeholder="E-MAIL" />
                <input type="password" placeholder="PASSWORD" />
                <input type="password" placeholder="CONFIRM PASSWORD" />
                <button type="submit">REGISTER</button>
            </div>
        </form>
    )
}