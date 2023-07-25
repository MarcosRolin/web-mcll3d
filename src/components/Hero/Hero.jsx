import React from 'react'
import { Link } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
  return (
    
    <div className='hero'>
      <div className='hero-content'>
        <h3 className='title'>Servicios de Impresión 3D</h3>
        <p className='parrafo'>¡Obtén prototipos y productos impresos en 3D de alta calidad!</p>
        <Link to='/contacto'><button className='btn-cotizacion'>¡Solicita una cotización!</button></Link>
      </div>

    </div>
  )
}

export {Hero}