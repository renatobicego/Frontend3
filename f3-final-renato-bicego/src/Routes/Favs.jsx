import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { ContextFavs } from "../Components/utils/favs.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {themeDark} = useContext(ContextGlobal)
  const {favs} = useContext(ContextFavs)


  return (
    <main className={`${themeDark && 'dark'} `} >
      <h1>Dentists Favs</h1>

      {favs.length ? 
        <div className="card-grid">
          {favs.map(dentist => <Card key={dentist.id} dentist={dentist} />)}
        </div>
        : 
        <h3 className="favs-msg">No Tienes Dentistas Guardados Como Favoritos</h3>
      }
    </main>
  );
};

export default Favs;
