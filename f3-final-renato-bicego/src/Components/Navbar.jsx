import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { themeDark, changeTheme } = useContext(ContextGlobal)

  return (
    <header className={`${themeDark && 'dark'}`}>
      <nav>
        <ul>
          <a href="/home"><li>Home</li></a>
          <a href="/contact"><li>Contacto</li></a>
          <a href="/favs"><li>Dentistas Guardados</li></a>
        </ul>
      </nav> 
      <button className='themeButton' onClick={changeTheme}>Change theme</button>
    </header>
    
  )
}

export default Navbar