import "./App.css";
import Layout from "./pages/Layout";
import Admin from "./pages/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Public from "./pages/Public";
/*import Public from "./pages/Public";*/

function App() {
  return (
    <div className="container">
      <header>
        <h1>FakeStore webáruház</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="public" element={<Public />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/*<Public />*/}
    </div>
  );
}

export default App;
