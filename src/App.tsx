const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

interface DadosPessois {
  cliente: string;
  idade: number;
  compras: {
    nome: string;
    preco: string;
  };
  ativo: boolean;
}

export function App(props: DadosPessois) {
  const Dados = luana;

  const totalGasto = Dados.compras
    .map((itens) => Number(itens.preco.replace("R$", "")))
    .reduce((a, b) => a + b);

  return (
    <>
      <p>Nome: {Dados.cliente}</p>
      <p>Idade: {Dados.idade}</p>
      <p>
        Situação:
        <span style={Dados.ativa ? { color: "green" } : { color: "red" }}>
          {Dados.ativa ? "Ativo" : "Inativo"}
        </span>
      </p>

      <p>Total gasto: {totalGasto}</p>
      {totalGasto > 10000 && <p>Você está gastando muito</p>}
    </>
  );
}
