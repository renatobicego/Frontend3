import { createContext, useEffect, useReducer } from "react";

const fetchData = async() => {
  let dentists

  await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      dentists = data
    })
    .catch(e => console.log(e))

  return dentists
}

export const initialState = {themeDark: false, data: []}

export const ContextGlobal = createContext(initialState)

const reducer = (state, action) => {
  switch (action.type) {
    case "theme":
      return {...state, themeDark: !state.themeDark}
    
    case "loadUsers":
      return {...state, data: action.payload}

    default:
      throw new Error();
  }
}


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetchData().then(data => {
      dispatch({type: "loadUsers", payload: data})
    })
  }, [])

  const changeTheme = () => dispatch({type: 'theme'})

  return (
    <ContextGlobal.Provider value={
      {
        themeDark: state.themeDark, 
        changeTheme,
        dentists: state.data
      }}>
      {children}
    </ContextGlobal.Provider>
  );
};
