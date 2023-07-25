import React from 'react';
import './Main.css';
import  soporte from '../images/soporte.jpeg';
import medico from '../images/medico.jpeg';
import filamento from '../images/filamento.jpeg';
import camara from '../images/camara.jpg';
import prototipo from '../images/prototipo.jpeg';
import guante from '../images/guante.jpg';
import aorta from '../images/aorta.jpg'

const Main = () => {

return (
<div className='services'>
  <h2 className='title'>NUESTROS PROYECTOS</h2>

  <div className='grid-container'>
    <div className='grid-item'>
      <h3 className='title'>Soporte Tecnico</h3>
      <img className='imagen-grid' src={soporte} alt='Soporte Tecnico' />
      <p>Asesoramiento tecnico sin costo, tambien lo asesoramos en cuanto a la posibilidad de usar piezas impresas en 3D
        para resolver su problema.</p>
    </div>

    <div className='grid-item'>
      <h3 className='title'>Procesamieto de Imagenes Medicas</h3>
      <img className='imagen-grid' src={medico} alt='Soporte Tecnico' />
      <p>Envíanos tu TAC y en menos de 24 horas tendrás en tus manos el biomodelo que necesitas</p>
    </div>

    <div className='grid-item'>
      <h3 className='title'>Venta de filamento</h3>
      <img className='imagen-grid' src={filamento} alt='Soporte Tecnico' />
      <p>Entre los filamentos que podemos ofrecer se encuentran los más habitualesen impresión 3D: PLA, ABS, PETG, HIPS,
        NYLON Y TPU</p>
    </div>

    <div className='grid-item'>
      <h3 className='title'>Impresion de Aorta</h3>
      <img className='imagen-grid' src={aorta} alt='Soporte Tecnico' />
      <p>Se realizo modelado e impresion de una aorta en base a una imagen medica.</p>
    </div>

    <div className='grid-item'>
      <h3 className='title'>Adaptador para camara profecional</h3>
      <img className='imagen-grid' src={camara} alt='Adaptador para camara profecional' />
      <p>En esta proyecto el cliente necesiaba este adaptador para colocar su camara al tripode y como el original era costoso se le imprimio el modelo</p>
    </div>

    <div className='grid-item'>
      <h3 className='title'>Protopipado de brazo robotico </h3>
      <img className='imagen-grid' src={prototipo} alt='Soporte Tecnico' />
      <p>Se modelo e imprimio el exoesqueleto de un brazo robotico para un estudieante de electronica.</p>
    </div>

    <div className='grid-item'>
      <h3 className='title'>Retira guantes</h3>
      <img className='imagen-grid' src={guante} alt='Soporte Tecnico' />
      <p>A raiz del covid-19 se modelo e imprimio un accesorio para poder retirar los guentes descartables de forma segura e higienica.</p>
    </div>

  </div>
</div>
);
};


export {Main};