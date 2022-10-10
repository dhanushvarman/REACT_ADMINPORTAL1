import React from 'react'
import { useParams } from 'react-router-dom'

function Viewuser() {
    const params = useParams()
  return (
    <div className='container'>
        <h1 className="card-text">ID : {params.id}</h1>
    </div>
  )
}

export default Viewuser