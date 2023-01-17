import "./style.css";

function Initial({ setInitialPage }) {
  function handlePage(event) {
    setInitialPage((previousState) => !previousState);
  }

  return (
    <div className="div-initial">
      <div className="margin">
        <div className="text-initial">
          <img src="./initiallogo.png" alt="" />
          <h1 className="h1-initial">
            Centralize o controle das suas finanças
          </h1>
          <p className="p-initial">de forma rápida e segura</p>
          <button className="btn-initial" onClick={handlePage}>
            Iniciar
          </button>
        </div>
        <img className="image-initial" src="./initial.svg" alt="" />
      </div>
    </div>
  );
}

export default Initial;
