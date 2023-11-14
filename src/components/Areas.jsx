import barra from '../assets/Group 1.png';
import barra2 from '../assets/Group 3.png';
import '../styles/Areas.css';


function Areas() {

  return (
    <div className='areas-content '>
      <p className='areas-title animate__animated animate__fadeIn'>
        Áreas de Atuação
      </p>
      {/* <div className='service-tag areas-title animate__animated animate__fadeIn' /> */}
      <span className='aaa-span areas-title animate__animated animate__fadeIn'>
        Em nosso escritório a expertise se entrelaça com a dedicação, oferecendo soluções jurídicas abrangentes em três pilares fundamentais: direito civil, laboral e de família. Em cada área de atuação, comprometemo-nos a ser a voz que traduz desafios em resoluções, seja na complexidade das relações familiares, nas nuances do universo laboral ou nos intricados cenários do direito civil. Aqui, a nossa missão é trilhar ao seu lado, construindo alicerces sólidos para sua vida e negócios. 
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