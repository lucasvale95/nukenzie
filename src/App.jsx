import "./App.css";
import { useState } from "react";
// import Form from "./components/Form";
import List from "./components/List";
import Form from "./components/Form";
import Header from "./components/Header";
import TotalMoney from "./components/TotalMoney";
import Initial from "./components/Initial";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const [initialPage, setInitialPage] = useState(true);
  console.log(listTransactions);

  return (
    <div className="App">
      {initialPage ? (
        <Initial setInitialPage={setInitialPage} />
      ) : (
        <>
          <header className="homepage-header">
            <Header setInitialPage={setInitialPage} />{" "}
          </header>
          <main className="homepage-main">
            <div className="container-form">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <TotalMoney listTransactions={listTransactions} />
            </div>
            <div className="container-list">
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
