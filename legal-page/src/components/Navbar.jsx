import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import '../styles/Navbar.css';

function Navbar() {

  return (
    <div className="main-content">
      <img
        className='img-content'
        src="https://josecajazeiro.adv.br/wp-content/uploads/2022/04/Simbolo-Transparente-150x150-1.png"
        alt="logo"
      />
      <div className='contact-content'>
        <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
          <MailOutlinedIcon fontSize="small" />
          <span>
            contato@henriqueribeiro.adv.br
          </span>
        </div>
        
        <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
          <PhoneInTalkOutlinedIcon fontSize="small" />
          <span>
            31 99111-1501
           </span>
        </div>

        <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
          <QuestionAnswerOutlinedIcon fontSize="small" />
          <span>
            WhatsApp
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;