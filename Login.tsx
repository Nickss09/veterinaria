import { useState } from "react";

export default function Login({ onLogin }: { onLogin: () => void }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleLogin() {
        if (email && senha) {
            onLogin();
        } else {
            alert("Preencha todos os campos!");
        }
    }

    return (
        <>
            <header className="título">
                <h1>Olá, bem-vindo aos Bichonários!</h1>
            </header>
            <div className="container">
                <h2>Login</h2>

                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <button onClick={handleLogin}>Entrar</button>
            </div>
        </>
    );

}