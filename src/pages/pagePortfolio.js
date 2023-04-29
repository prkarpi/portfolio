import HeaderModule from './headerModule';

const Portfolio = () => {
  return (
    <div>
        <HeaderModule/>
        <div class="box-about-page fade-in">
            <div className="page-header">Projects</div>
           
            <div className="about-page-paragraph">
            <div className='company-background'>@IDSociety</div> My first employer at NYC firm allowed me to gain a collosal amount of knowledge and experience where our team worked with such names as New York Post Sports Section, Audemars Piguet, Hard Candy, Baltimore Ravens and more. As a lead frontend developer my daily operations included working cooperatively with client services, sales and design team in deadline-driven environment; produced websites compatible with multiple browsers; worked with backend developers and design team members to meet the requirements for functionality, scalability, and performance. Coded using HTML, CSS, PHP and JavaScript to develop rich and performace oriented content.
            <div className="project-page-paragraph-techologies"><b>Technologies used:</b>
            <p className='projects-page-stack'>Javascript, HTML, CSS, PHP, </p></div>
            <hr/>
            </div>

            <div className="about-page-paragraph">
            <div className='company-background'>@Harvard in Tech Seattle</div> My current position is of mammoth proportions involving Machine Learning and Data Science Team where I take a part in a fullstack role, but leading a frontend position developing React applications. As a lead frontend developer my daily operations include working closely with Node js developers and UI/UX team in a sprint-driven environment. Tasks include modern browser compatibility, mobile scalability and mobile platform built. Frontend is developed in React.
            <div className="project-page-paragraph-techologies"><b>Technologies used:</b>
            <p className='projects-page-stack'>React, Redux, CSS, Node, Express, API, MongoDB, Mocha, React Testing Library +DevOps including CI/CD</p></div>
            <hr/>
            </div>
            
      </div>
    </div>
  );
}

export default Portfolio;
