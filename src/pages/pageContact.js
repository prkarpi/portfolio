import HeaderModule from './headerModule';
import { Link } from 'react-router-dom';
import LinkedInImg from '../styles/img/linked-logo.png';
import EmailImg from '../styles/img/email-logo.png';
import GitHubImg from '../styles/img/github-logo.png'


const Contact = () => {
    const handleEmailClick = (event) => {
        event.preventDefault();
        window.location.href = 'mailto:serge.vassiliev@gmail.com';
      };
  return (
    <div>
        <HeaderModule/>
        <div class="box-about-page fade-in reach-out-row">
        <div className="page-header">Contact:</div>
           
        <div className="about-page-paragraph">
            <Link to={'https://www.linkedin.com/in/sergey-vasfield-81055b42/'}><img src={LinkedInImg} alt='LinkedIn' style={{ width: '6em'}}></img></Link>
            <Link to='email' onClick={handleEmailClick}><img src={EmailImg} alt='LinkedIn' style={{ width: '6em'}}></img></Link>
            <Link to={'https://github.com/prkarpi'}><img src={GitHubImg} alt='LinkedIn' style={{ width: '5.5em', paddingLeft: '.5em'}}></img></Link>
        </div>
            
        </div>
    </div>
  );
}

export default Contact;
