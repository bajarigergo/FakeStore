import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [termekLista, setTermekLista] = useState([]);
  const [katLista, setKatLista] = useState([]);

  const getAdat = async (vegpont, callbackfv) => {
    try {
      const response = await myAxios.get(vegpont);
      console.log(response.data);

      callbackfv(response.data);
    } catch (err) {
      console.log("Hiba történt az adatok lekérésekor.", err);
    } finally {
    }
  };

  const postAdat = async (vegpont, adat) => {
    try {
      const response = await myAxios.post(vegpont, adat);
      console.log(response);
    } catch (err) {
      console.log("Hiba történt az adatok felvitelékor.", err);
    } finally {
    }
  };
  const deleteAdat = async (vegpont) => {
    try {
      const response = await myAxios.delete(vegpont);
      console.log(response);
    } catch (err) {
      console.log("Hiba történt az adatok törlésekor.", err);
    } finally {
    }
  };
  function termekTorles(id) {
    setTermekLista(termekLista.filter((termek) => id !== termek.id));
    deleteAdat(`/products/${id}`)
  }

  useEffect(() => {
    getAdat("/products", setTermekLista);
    getAdat("/products/categories", setKatLista);
    
  }, []);

  return (
    <ApiContext.Provider
      value={{ termekLista, postAdat, katLista, termekTorles }}
    >
      {children}
    </ApiContext.Provider>
  );
};
