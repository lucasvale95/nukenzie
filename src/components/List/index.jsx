import "./style.css";
import Card from "../Card";
import { useEffect, useState } from "react";

function List({ listTransactions, setListTransactions }) {
  useEffect(() => {
    setListaRenderizada(listTransactions);
  }, [listTransactions]);

  const [listaRenderizada, setListaRenderizada] = useState(listTransactions);

  function filterAll(event) {
    setListaRenderizada(listTransactions);
  }

  function filterEntry(event) {
    setListaRenderizada(
      listTransactions.filter((item) => item.type === "Entrada")
    );
  }

  function filterExit(event) {
    setListaRenderizada((previusState) =>
      listTransactions.filter((item) => item.type === "Despesa")
    );
  }
  console.log(listaRenderizada);
  return (
    <>
      <section>
        <div className="section-div">
          <h3 className="section-title">Resumo financeiro</h3>
          <button className="section-btn-filter" onClick={filterAll}>
            Todos
          </button>
          <button className="section-btn-filter" onClick={filterEntry}>
            Entradas
          </button>
          <button className="section-btn-filter" onClick={filterExit}>
            Despesas
          </button>
        </div>
        <ul className="ul">
          {listTransactions.length === 0 ? (
            <li className="noList">
              <h2 className="text-noList">
                Você ainda não possui nenhum lançamento
              </h2>
              <img src="./NoCard.png" alt="" />
            </li>
          ) : (
            listaRenderizada.map(({ description, type, value }, index) => (
              <Card
                description={description}
                key={index}
                type={type}
                value={value}
                index={index}
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            ))
          )}
        </ul>
      </section>
    </>
  );
}

export default List;
