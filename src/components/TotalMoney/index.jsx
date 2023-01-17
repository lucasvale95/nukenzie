import "./style.css";
function TotalMoney({ listTransactions }) {
  const filterExit = listTransactions.filter((list) => list.type === "Despesa");
  const filterEntry = listTransactions.filter(
    (list) => list.type === "Entrada"
  );
  const reduceExit = filterExit.reduce((acc, exit) => acc + exit.value, 0);
  const reduceEntry = filterEntry.reduce((acc, entry) => acc + entry.value, 0);

  return (
    <section className="section">
      <div className="section-value">
        <span className="text">Valor total:</span>
        <span className="value">R$ {reduceEntry - reduceExit}</span>
      </div>
      <p className="section-text">
        O valor se refere ao saldo <span>(Entradas-Despesas)</span>
      </p>
    </section>
  );
}

export default TotalMoney;
