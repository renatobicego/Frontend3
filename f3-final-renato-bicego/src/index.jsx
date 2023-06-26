import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './Components/utils/global.context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Components/Form';
import Home from './Components/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route path='/contacto' element={<Form />}/>
            <Route path='/home' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </ContextProvider>
      
  </React.StrictMode>
);


