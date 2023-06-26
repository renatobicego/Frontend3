
import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextGlobal } from "./Components/utils/global.context";
import { Outlet } from "react-router-dom";


function App() {
  const {themeDark} = useContext(ContextGlobal)

  return (
      <div className={`App ${themeDark ? 'dark' : ''}`}>
          <Navbar/>
          <Outlet />
          <Footer/>
      </div>
  );
}

export default App;
