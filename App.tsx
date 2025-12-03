import { useState } from "react";
import Login from "./pages/Login";
import CadastroPet from "./pages/Cadastro";
import Agendamento from "./pages/Agendamento";

export default function App() {
  const [tela, setTela] = useState<"login" | "cadastro" | "agenda">("login");

  if (tela === "login") return <Login onLogin={() => setTela("cadastro")} />;
  if (tela === "cadastro") return <CadastroPet onNext={() => setTela("agenda")} />;
  if (tela === "agenda") return <Agendamento />;

  return null;
}
