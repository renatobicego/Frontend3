import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { ContextFavs } from "./utils/favs.context";


const Card = ({ dentist }) => {

  const {themeDark} = useContext(ContextGlobal)
  const {favs, addFav, removeFav} = useContext(ContextFavs)

  const addFavDentist = () => {
    addFav(dentist)
  }

  const removeFavDentist = () => {
    removeFav(dentist)
  }

  return (
    <div className={`card ${themeDark && 'dark'}`}>
      <img src="/images/doctor.jpg" alt="" />


      <a href={`/dentist/${dentist.id}`}>
        <h3>{dentist.name}</h3>
        <h4>{dentist.username}</h4>

      </a>

      {favs.includes(dentist) ? 
        <button onClick={removeFavDentist} className="favButton">Remove fav</button>
        :
        <button onClick={addFavDentist} className="favButton">Add fav</button>
      }
        
    </div>
  );
};

export default Card;
