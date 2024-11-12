import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";
import TermekAdminSor from "./TermekAdminSor.js";


function TermekekAdmin() {
  const { termekLista } = useContext(ApiContext);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Description</th>
          <th scope="col">Category</th>
          <th scope="col">Módosítás</th>
          <th scope="col">Törlés</th>
        </tr>
      </thead>
      <tbody>
        {termekLista.map((termek) => {
          return <TermekAdminSor lista={termekLista} termek={termek} key={termek.id} />
        })}
      </tbody>
    </table>
  );
}

export default TermekekAdmin;
