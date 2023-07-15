import barra from '../assets/Group 1.png';
import barra2 from '../assets/Group 3.png';
import '../styles/Areas.css';


function Areas() {

  return (
    <div className='areas-content '>
      <p className='areas-title '>
        Áreas de Atuação
      </p>
      <div className='service-tag ' />
      <span className='services-span '>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      </span>
      <span className='areas-span '>Processos Trabalhistas</span>
      <div className='area-um ' />
      <span className='areas-span '>Indenizações</span>
      <img src={barra} alt="bara um " />
      <span className='areas-span '>Acordos Realizados</span>
      <img src={barra2} alt="bara um " />
    </div>
  )
}

export default Areas;