import { useState } from "react";

export default function CadastroPet({ onNext }: { onNext: () => void }) {
    const [nome, setNome] = useState("");
    const [animal, setAnimal] = useState("");

    function handleSubmit() {
        if (!nome || !animal) return alert("Preencha todos os campos!");
        onNext();
    }

    return (
        <>
        <header>
            <h1>Agora que você se conectou, quem será o nosso próximo paciente?</h1>
        </header>
            <div className="container">
                <h2>Cadastro do Pet</h2>

                <input
                    type="text"
                    placeholder="Nome do pet"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Tipo de animal (cachorro, gato...)"
                    value={animal}
                    onChange={(e) => setAnimal(e.target.value)}
                />

                <button onClick={handleSubmit}>Continuar</button>
            </div>
        </>
    );
}
