import { useState } from "react";

export default function Agendamento() {
    const [dia, setDia] = useState("");
    const [hora, setHora] = useState("");

    function handleAgendar() {
        if (!dia || !hora) return alert("Preencha tudo!");
        alert("Agendado com sucesso!");
    }

    return (
        <>
            <header>
                <h1>Que bom tê-lo(a) conosco! Mas quando será sua próxima consulta?</h1>
            </header>
            <div className="container">
                <h2>Agendamento</h2>

                <input
                    type="date"
                    value={dia}
                    onChange={(e) => setDia(e.target.value)}
                />

                <input
                    type="time"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                />

                <button onClick={handleAgendar}>Agendar</button>
            </div>
        </>
    );

}
