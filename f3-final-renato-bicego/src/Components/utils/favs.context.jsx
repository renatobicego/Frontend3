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
        const idAdd = action.payload
        const newFavs = [...state.favs, idAdd]
        setFavsInStorage(newFavs)
        return state

    case 'remove_fav':
        const idRemove = action.payload
        const favsUpdated = state.favs.filter(fav => fav !== idRemove)
        setFavsInStorage(favsUpdated)
        return state
    
    default:
      return state
  }
}




export const FavsContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [favs, dispatch] = useReducer(reducer, {}, getFavsFromStorage)

  const addFav = (id) => dispatch({type: 'add_fav', payload: id})
  const removeFav = (id) => dispatch({type: 'remove_fav', payload: id})

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