import React from 'react'
import { Link } from 'react-router-dom';
import  error  from '../images/error404.jpg';
import './Nopages.css';


export const Nopage = () => {
  return (
    <div className='error-404'>

        <img  className='img-error' src={error} alt='' />
        <h2 className='title-error'>Lo sentimos, la página que estás buscando no pudo ser encontrada.</h2>
        <Link to='/'><button className='btn-error'>Volver atras</button></Link> 
    
    </div>

  )
}

export default  Nopage;