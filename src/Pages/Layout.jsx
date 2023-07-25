// import React from 'react'
import { Outlet,Link } from 'react-router-dom';
import logo from '../components/images/Logo1.jpeg';
import './Layout.css'

const Layout = () => {
  return (
    <div>
        <header className='header' >
        <div className='logo'>
            <img className='logo-img' src={logo} alt="Logo_MCLL3D" />
        </div>
        <div className='container-nav'>
        <nav className='navigation'>
            <Link id='a1' className='a' to='/'>Home</Link>
            <Link className='a' to='/servicio'>Servicios</Link>
            <Link className='a' to='/proyectos'>Proyectos</Link>
            <Link className='a' to='/contacto'>Contacto</Link>
        </nav>
        </div>
        </header>
        <Outlet/>
    </div>
  )
}
export default Layout;