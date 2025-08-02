import barra from '../assets/Group 1.png';
import barra2 from '../assets/Group 3.png';
import '../styles/Areas.css';

function Areas() {
  return (
    <div className='areas-content'>
      <p className='areas-title animate__animated animate__fadeIn'>
        Áreas de Actuación
      </p>

      <span className='aaa-span areas-title animate__animated animate__fadeIn'>
        En nuestro despacho, la experiencia se entrelaza con la dedicación, ofreciendo soluciones jurídicas integrales en tres pilares fundamentales: derecho civil, laboral y de familia. En cada área de actuación, nos comprometemos a ser la voz que transforma los desafíos en soluciones, ya sea en la complejidad de las relaciones familiares, en las particularidades del mundo laboral o en los intrincados escenarios del derecho civil. Nuestra misión es caminar a tu lado, construyendo bases sólidas para tu vida y tus negocios.
      </span>

      {/* Derecho Laboral */}
      <span className='areas-span'>Derecho Laboral</span>
      <div className='area-um' />
      <ul className='areas-list'>
        <li>Demandas laborales individuales y colectivas</li>
        <li>Revisión y redacción de contratos de trabajo</li>
        <li>Acuerdos y desvinculaciones laborales</li>
        <li>Defensa en juicios laborales</li>
      </ul>
      <img src={barra} alt="barra separadora" />

      {/* Derecho Civil */}
      <span className='areas-span'>Derecho Civil</span>
      <div className='area-um' />
      <ul className='areas-list'>
        <li>Contratos y obligaciones</li>
        <li>Constitución de empresas y sociedades</li>
        <li>Consultoría y asesoría civil</li>
        <li>Litigios civiles</li>
      </ul>
      <img src={barra2} alt="barra separadora" />

      {/* Derecho de Familia */}
      <span className='areas-span'>Derecho de Familia</span>
      <div className='area-um' />
      <ul className='areas-list'>
        <li>Divorcios y pensiones alimenticias</li>
        <li>Custodia de hijos y régimen de visitas</li>
        <li>Sucesiones y particiones de bienes</li>
        <li>Reconocimiento y disolución de uniones de hecho</li>
      </ul>
    </div>
  );
}

export default Areas;
