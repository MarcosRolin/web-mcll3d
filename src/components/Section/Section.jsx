import React from 'react'
import './Section.css';
import  soporte from '../images/soporte.jpeg';
import medico from '../images/medico.jpeg';
import filamento from '../images/filamento.jpeg';


const Section = () => {
return (
<div className='services'>
  <h2 className='title'>SERVICIOS</h2>

  <div className='grid-container'>
    <div className='grid-item'>
      <h3 className='title'>Soporte Tecnico</h3>
      <img className='imagen-grid' src={soporte} alt='Soporte Tecnico'/>
      <p>Asesoramiento tecnico sin costo, tambien lo asesoramos en cuanto a la posibilidad de usar piezas impresas en 3D
        para resolver su problema.</p>
    </div>

    <div className='grid-item'>
      <h3 className='title'>Procesamieto de Imagenes Medicas</h3>
      <img className='imagen-grid' src={medico} alt='Soporte Tecnico'/>
      <p>Envíanos tu TAC y en menos de 24 horas tendrás en tus manos el biomodelo que necesitas</p>
    </div>

    <div className='grid-item'>
      <h3 className='title'>Modelado e Impresion 3D de Prototipado Rápido</h3>
    <img className='imagen-grid' src={filamento} alt='Soporte Tecnico'/>
      <p>Entre los filamentos que podemos ofrecer se encuentran los más habitualesen impresión 3D: PLA, ABS, PETG, HIPS, NYLON Y TPU</p>
    </div>
  
  </div>
</div>
);
};


export {Section};