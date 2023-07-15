import henrique from '../assets/henrique.jpeg';
import thais from '../assets/thaiss.jpeg';
import '../styles/People.css';


function People() {

  return (
    <div className="people-content">
      <p className='areas-title '>Nossa Equipe</p>
      <div className='service-tag ' />
      <div className='people-img-content'>
        <div>
          <img className='people-img' src={henrique} alt="henrique" />
          <p className='people-p'>Henrique E. Soares Ribeiro</p>
          <span className='people-span'>
            Sócio Fundador - OAB-MG 213.296 
          </span>
          <span className='areas-span'>
            Formado em Direito pela FAMINAS-BH
          </span>
        </div>
        <div>
          <img className='people-img' src={thais} alt="henrique" />
          <p className='people-p'>Thais C. Soares Ribeiro</p>
          <span className='people-span'>
            Co-Fundador - OAB-MG 216.457 
          </span>
          <span className='areas-span'>
            Formado em Direito pela FAMINAS-BH
          </span>
        </div>
      </div>
    </div>
  )
}

export default People;