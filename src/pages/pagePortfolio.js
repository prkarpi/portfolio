import { Link } from 'react-router-dom';


function App() {
  return (
    <div>
        <div><Link to='/'>home&#8249;</Link></div>
        <div class="box-about-page fade-in">
            <div className="about-page-header">Projects</div>
           
            <div className="about-page-paragraph">
            <div className='company-background'>@IDSociety</div> My first employer at NYC firm allowed me to gain a collosal amount of knowledge and experience where our team worked with such names as New York Post Sports Section, Audemars Piguet, Hard Candy, Baltimore Ravens and more. As a lead frontend developer my daily operations included working cooperatively with client services, sales and design team in deadline-driven environment; produced websites compatible with multiple browsers; worked with backend developers and design team members to meet the requirements for functionality, scalability, and performance. Coded using HTML, CSS, PHP and JavaScript to develop rich and performace oriented content.
            <div className="project-page-paragraph-techologies"><b>Technologies used:</b>
            <p className='projects-page-stack'>Javascript, HTML, CSS, PHP, </p></div>
            <hr/>
            </div>

            <div className="about-page-paragraph">
            <div className='company-background'>Harvard inTech Seattle</div> My first employer at NYC firm allowed me to gain a collosal amount of knowledge and experience where our team worked with such names as New York Post Sports Section, Audemars Piguet, Hard Candy, Baltimore Ravens and more. As a lead frontend developer my daily operations included working cooperatively with client services, sales and design team in deadline-driven environment; produced websites compatible with multiple browsers. Worked with backend developers and design team members to meet the requirements for functionality, scalability, and performance. Coded using HTML, CSS, PHP and JavaScript to develop rich and performace oriented content.
            <div className="about-page-paragraph-techologies"><b>Technologies used</b><hr/>
            <p className='projects-page-stack'>Javascript, HTML, CSS, PHP</p></div>
            </div>
            
      </div>
    </div>
  );
}

export default App;
