import { useState } from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newEntry = {
      description,
      value,
      type,
    };

    setListTransactions((previousState) => [...previousState, newEntry]);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label">Descrição</label>
        <input
          className="form-input"
          type="text"
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Digite aqui sua descrição"
        />
        <p className="form-text-exemple">Ex: Compra de roupas</p>

        <div className="form-values">
          <div className="form-column">
            <label className="form-label">Valor</label>
            <input
              className="form-input-values"
              type="number"
              onChange={(event) => setValue(Number(event.target.value))}
              placeholder="R$"
            />
          </div>
          <div className="form-column">
            <label className="form-label">Tipo de valor</label>
            <select
              className="form-input-type"
              required
              onChange={(event) => setType(event.target.value)}
            >
              <option className="select" value=""></option>
              <option className="select" value="Entrada">
                Entrada
              </option>
              <option className="select" value="Despesa">
                Despesa
              </option>
            </select>
          </div>
        </div>

        <button className="btnInsert" type="submit">
          Inserir valor
        </button>
      </form>
    </>
  );
}

export default Form;
