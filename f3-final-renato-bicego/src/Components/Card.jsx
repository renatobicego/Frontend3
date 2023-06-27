import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { ContextFavs } from "./utils/favs.context";


const Card = ({ dentist }) => {

  const {themeDark} = useContext(ContextGlobal)
  const {favs, addFav, removeFav} = useContext(ContextFavs)
  console.log(favs, addFav, removeFav)

  const addFavDentist = () => {
    // Aqui iria la logica para agregar la Card en el localStorage

  }

  return (
    <div className={`card ${themeDark && 'dark'}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <a href={`/dentist/${dentist.id}`}>
          <h3>{dentist.name}</h3>
          <h4>{dentist.username}</h4>
          <h4>{dentist.id}</h4>

        </a>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button  className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
