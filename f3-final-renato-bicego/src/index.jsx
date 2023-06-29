import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './Components/utils/global.context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Components/Form';
import Home from './Routes/Home';
import { FavsContextProvider } from './Components/utils/favs.context';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <FavsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App/>}>
              <Route path='/contacto' element={<Form />}/>
              <Route path='/home' element={<Home />} />
              <Route path='/dentist/:id' element={<Detail />} />
              <Route path='/favs' element={<Favs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FavsContextProvider>
    </ContextProvider>
      
  </React.StrictMode>
);


