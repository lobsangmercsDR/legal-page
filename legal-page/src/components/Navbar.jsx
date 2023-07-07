import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import colorido from '../assets/original.png';
import '../styles/Navbar.css';

function Navbar() {

  return (
    <div className="main-content">
      <img
        className='img-content'
        src={colorido}
        alt="logo"
      />
      <div className='contact-content'>
        <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
          <MailOutlinedIcon fontSize="small" />
          <a href="mailto:contato@henriqueribeiro.adv.br">
          <span>
            contato@henriqueribeiro.adv.br
          </span>
          </a>
        </div>
        
        <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
          <PhoneInTalkOutlinedIcon fontSize="small" />
          <a href="tel:31991111501">
          <span>
            31 99111-1501
           </span>
          </a>
        </div>

        <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
          <QuestionAnswerOutlinedIcon fontSize="small" />
          <a href="https://wa.me//553196438846?text=Tenho%20interesse%20em%20contactar%20um%20advogado%20especialista!" target="_blank" rel="noreferrer">
          <span>
            WhatsApp
          </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;