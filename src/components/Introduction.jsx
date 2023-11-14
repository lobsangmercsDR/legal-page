import '../styles/Introduction.css';

function Introduction() {

  return(
    <div className="introduction-content">
      <div className='introduction-titles'>
        <p>Advocacia Trabalhista</p>
        <p className='introduction-exp'>Especializada</p>
        <p className='introduction-span'>Em Defesa do Direito Cível e Laboral.</p>
      </div>
      
      <div>
      <a href="https://wa.me//553196438846?text=Tenho%20interesse%20em%20contactar%20um%20advogado%20especialista!" target="_blank" rel="noreferrer">
        <button>
          <span>FALE CONOSCO</span>
        </button>
      </a>
      </div>
      
    </div>
  )
}

export default Introduction;