import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState({})
  const {id} = useParams()
  console.log(dentist)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setDentist(data))
  }, [id])

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      <div className='dentist-details'>
        <h3>{dentist.name}</h3>
        <h4>{dentist.email}</h4>
        <h4>{dentist.phone}</h4>
        <a href={dentist.website}>{dentist.website}</a>

      </div>
    </>
  )
}

export default Detail