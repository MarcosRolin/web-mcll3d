import React from 'react'
import './Footer.css';

const Footer = () => {
return (
<div className='footer'>
  <div className='footer-container'>
    <div className='footer-column'>
      <h3>Dirección</h3>
      <p>Villa Luro, C.A.B.A</p>
      <p>Buenos Aires</p>
    </div>
    <div className='footer-column'>
      <h3>Contacto</h3>
      <p>Teléfono: +543794341791</p>
      <p>Email: matias.carbonell.08@gmail.com</p>
    </div>
    <div className='footer-column'>
      <h3>Síguenos en</h3>
      <div className='social-icons'>
        <a href='https://wa.link/5w8248'>
          <i className='fab fa-whatsapp'></i>
        </a>
        <a href='https://www.instagram.com'>
          <i className='fab fa-instagram'></i>
        </a>
        <a href='https://matias.carbonell.08@gmail.com'>
          <i className='far fa-envelope'></i>
        </a>
        <a href='https://www.facebook.com/matias.carbonell.5'>
          <i className='fab fa-facebook'></i>
        </a>
      </div>
        <a className='autor' href='https://wa.link/8nymnc'>Pagina Creada por: <br /> Marcos Rolin-Desarrollador Web</a>
    </div>
  </div>
</div>
);
};

export {Footer}



