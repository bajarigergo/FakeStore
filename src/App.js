import logo from "./logo.svg";
import "./App.css";
import Kosar from "./components/Kosar";
import Vasarloter from "./components/Vasarloter";
import { useContext } from "react";
import { ApiContext } from "./contexts/ApiContext";
import { KosarContext } from "./contexts/KosarContext";


function App() {
  const { termekLista } = useContext(ApiContext);
  const { kosarLista } = useContext(KosarContext);

  return (
    <div className="container">
      <header>
        <h1>FakeStore webáruház</h1>
      </header>
      <main className="row">
        <article className="col-lg-8">
          <h4>Vásárlótér</h4>
          <Vasarloter termekLista={termekLista} />
        </article>
        <aside className="col-lg-3">
          <h4>Kosár🛒</h4>
          <Kosar kosarLista={kosarLista}/>
        </aside>
      </main>
    </div>
  );
}

export default App;
