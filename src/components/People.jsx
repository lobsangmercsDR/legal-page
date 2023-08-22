import henrique from '../assets/henrique.jpeg';
import thais from '../assets/thaiss.jpeg';
import '../styles/People.css';


function People() {

  return (
    <div className="people-content">
      <p className='areas-title animate__animated animate__fadeInLeft'>Nossa Equipe</p>
      <div className='service-tag ' />
      <div className='people-img-content'>
        <div>
          <img className='people-img animate__animated animate__fadeIn' src={henrique} alt="henrique" />
          <p className='people-p animate__animated animate__fadeIn'>Henrique E. Soares Ribeiro</p>
          <span className='people-span animate__animated animate__fadeIn'>
            Sócio Fundador - OAB-MG 213.296 
          </span>
          <span className='areas-span animate__animated animate__fadeIn'>
            Formado em Direito pela FAMINAS-BH
          </span>
        </div>
        <div>
          <img className='people-img animate__animated animate__fadeIn' src={thais} alt="henrique" />
          <p className='people-p animate__animated animate__fadeIn'>Thais C. Soares Ribeiro</p>
          <span className='people-span animate__animated animate__fadeIn'>
            Co-Fundador - OAB-MG 216.457 
          </span>
          <span className='areas-span animate__animated animate__fadeIn'>
            Formado em Direito pela FAMINAS-BH
          </span>
        </div>
      </div>
    </div>
  )
}

export default People;