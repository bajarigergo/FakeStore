
import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [termekLista, setTermekLista ]  = useState([]);

  
  const getAdat = async (vegpont)=> {

    try {        
        const response = await myAxios.get(vegpont);
        console.log(response.data);
        
        setTermekLista(response.data)
    } catch (err) {
      console.log("Hiba történt az adatok lekérésekor.", err);
    } finally {
    }
  };
  useEffect(() =>{
    getAdat("/products")
  },[])

  return (
    <ApiContext.Provider value={{ termekLista }}>
      {children}
    </ApiContext.Provider>
  );
};
