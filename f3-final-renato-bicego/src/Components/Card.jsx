import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { ContextFavs } from "./utils/favs.context";


const Card = ({ dentist }) => {

  const {themeDark} = useContext(ContextGlobal)
  const {favs, addFav, removeFav} = useContext(ContextFavs)

  const addFavDentist = () => {
    addFav(dentist.id)
  }

  const removeFavDentist = () => {
    removeFav(dentist.id)
  }

  return (
    <div className={`card ${themeDark && 'dark'}`}>

        <a href={`/dentist/${dentist.id}`}>
          <h3>{dentist.name}</h3>
          <h4>{dentist.username}</h4>
          <h4>{dentist.id}</h4>

        </a>

        {favs.includes(dentist.id) ? 
          <button onClick={removeFavDentist} className="favButton">Remove fav</button>
          :
          <button onClick={addFavDentist} className="favButton">Add fav</button>
        }
        
    </div>
  );
};

export default Card;
