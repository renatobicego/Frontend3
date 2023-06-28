import { createContext, useReducer } from "react"

export const ContextFavs = createContext()

const getFavsFromStorage = () => {
  const localData = localStorage.getItem('favs')
  return localData ? JSON.parse(localData) : []
}

const setFavsInStorage = (favs) => {

  localStorage.setItem('favs', JSON.stringify(favs))
}

const reducer = (state, action) => {

  switch (action.type) {
    case "add_fav":
        const objAdd = action.payload
        const newFavs = [...state, objAdd]
        setFavsInStorage(newFavs)
        return newFavs

    case 'remove_fav':
        const objRemove = action.payload
        const favsUpdated = state.filter(fav => fav.id !== objRemove.id)
        setFavsInStorage(favsUpdated)
        return favsUpdated
    
    default:
      return state
  }
}




export const FavsContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [favs, dispatch] = useReducer(reducer, {}, getFavsFromStorage)

  const addFav = (dentist) => dispatch({type: 'add_fav', payload: dentist})
  const removeFav = (dentist) => dispatch({type: 'remove_fav', payload: dentist})

  return (
    <ContextFavs.Provider value={
      {
        favs, 
        addFav,
        removeFav
      }}>
      {children}
    </ContextFavs.Provider>
  );
};