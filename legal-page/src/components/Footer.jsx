import '../styles/Footer.css';

function Footer() {

  return (
    <div className='footer-content'>
      <p className='footer-title animate__animated animate__fadeIn'>Agende um Horário</p>
      <span className='footer-span animate__animated animate__fadeIn'>Rua 1, 530 - Maria José, Vespasiano - MG, 33202-506 - CNPJ - 11.222-333/0123-55</span>
      <div className='footer-btns animate__animated animate__fadeIn'>
        <span>
        <a href="mailto:contato@henriqueribeiro.adv.br">
          <button>
            <span>E-MAIL</span>
          </button>
        </a>
        <a href="tel:31991111501">
          <button>
            <span>TELEFONE</span>
          </button>
        </a>
        <a href="https://wa.me//553196438846?text=Tenho%20interesse%20em%20contactar%20um%20advogado%20especialista!" target="_blank" rel="noreferrer">
          <button>
            <span>WHATSAPP</span>
          </button>
        </a>
        </span>
      </div>
      
    </div>
  )
}

export default Footer;