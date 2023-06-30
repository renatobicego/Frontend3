import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { ContextFavs } from "./utils/favs.context";
import {HeartIcon as Heart}  from '@heroicons/react/24/outline'
import {HeartIcon as HeartFull}  from '@heroicons/react/24/solid'

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

      {favs.some(fav => fav.id === dentist.id) ? 
        
        <button onClick={removeFavDentist} className="favButton"><HeartFull style={{'width': '20px'}} strokeWidth={2}/></button>
        :
        <button onClick={addFavDentist} className="favButton"><Heart style={{'width': '20px'}} strokeWidth={2}/></button>
      }
        
    </div>
  );
};

export default Card;
