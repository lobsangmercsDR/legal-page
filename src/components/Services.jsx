import aperto2 from '../assets/aperto2.jpg';
import aperto from '../assets/law-firm-06.jpg';
import terno from '../assets/terno.jpg';

import '../styles/Services.css';

function Services() {

  return (
    <div className='services-content'>
      <p className='services-title animate__animated animate__fadeInLeft'>Nossos Serviços Prestados</p>
      <div className='service-tag' />
      <div className='services-image'>
        <div>
          <img className='services-image' src={aperto} alt="aaa" />
          <p className='services-p animate__animated animate__fadeInUp'>
            Acordos Trabalhistas
          </p>
          <span className='services-span animate__animated animate__fadeInUp'>
          Arcos laborais são alicerces fictícios da harmonia entre empregador e colaborador na complexa tapeçaria do mundo profissional.
          </span>
        </div>
        <div>
          <img className='services-image' src={terno} alt="aaa" />
          <p className='services-p animate__animated animate__fadeInUp'>
            Diligências Processuais
          </p>
          <span className='services-span animate__animated animate__fadeInUp'>
          Diligências processuais são as engrenagens invisíveis que impulsionam a máquina da justiça, guiando cada passo no intricado caminho do sistema legal. 
          </span>
        </div>
        <div>
          <img className='services-image' src={aperto2} alt="aaa" />
          <p className='services-p animate__animated animate__fadeInUp'>
            Consultoria Especializada
          </p>
          <span className='services-span animate__animated animate__fadeInUp'>
          Consultoria especializada é a bússola confiável que orienta empresas, traduzindo complexidades em estratégias sólidas na vastidão do mundo corporativo. 
          </span>
        </div>
        
      </div>
      <div className='services-button'>
      <a href="https://wa.me//553196438846?text=Tenho%20interesse%20em%20contactar%20um%20advogado%20especialista!" target="_blank" rel="noreferrer">
        <button>
          <span>FALE CONOSCO</span>
        </button>
      </a>
      </div>
    </div>
  )
}

export default Services;
