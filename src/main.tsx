import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./global.css";

interface DadosPessois {
  cliente: string;
  idade: number;
  compras: {
    nome: string;
    preco: string;
  };
  ativo: boolean;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>
);
