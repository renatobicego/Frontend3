import React, { useState } from "react";

const validateNombre = (nombre) => {
  if(nombre.length < 5){
    return false
  }
  return true
}

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(validateNombre(nombre) && validateEmail(email)){
      setStatus(true)
    }else{
      setStatus(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={nombre} type="text" onChange={e => setNombre(e.target.value)} name="nombre" id="" placeholder="Nombre Completo"/>
        <input value={email} type="email" onChange={e => setEmail(e.target.value)} name="email" id="" placeholder="Email"/>
        <button type="submit">Enviar</button>
        {
          status === undefined ? '' : 
            <h4>{status ? `Gracias ${nombre}, te contactaremos cuando antes vía mail` : 'Por favor verifique su información nuevamente' }</h4>
        }
        
      </form>

    </div>
  );
};

export default Form;
