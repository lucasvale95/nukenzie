import "./style.css";

function Header({ setInitialPage }) {
  function handlePage(event) {
    setInitialPage((previousState) => !previousState);
  }

  return (
    <div className="header">
      <img src="/nukenzie.png" alt="" />
      <button className="btnStart" onClick={handlePage}>
        Inicio
      </button>
    </div>
  );
}

export default Header;
