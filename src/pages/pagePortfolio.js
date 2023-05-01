import HeaderModule from './headerModule';

const Portfolio = () => {
  return (
    <div>
        <HeaderModule/>
        <div class="box-about-page fade-in">
            <div className="page-header">Projects</div>
           
            <div className="about-page-paragraph">
            <div className='company-background'>@IDSociety</div> My first employer at NYC firm allowed me to gain a collosal amount of knowledge and experience where our team worked with such names as New York Post Sports Section, Audemars Piguet, Hard Candy, Baltimore Ravens and more. As a lead frontend developer my daily operations included working cooperatively with client services, sales and design team in deadline-driven environment; produced websites compatible with multiple browsers; worked with backend developers and design team members to meet the requirements for functionality, scalability, and performance. Coded using HTML, CSS, PHP and JavaScript to develop rich and performance oriented content. <u>(www.idsociety.com)</u> - sadly company has shut downs its doors.
            <div className="project-page-paragraph-techologies"><b>Technologies used:</b></div>
            <p className='projects-page-stack'>Javascript, HTML, CSS, PHP, </p>
            <hr/>
            </div>

            <div className="about-page-paragraph">
            <div className='company-background'>@Harvard in Tech Seattle</div> My current position is of mammoth proportions involving Machine Learning and Data Science Team where I take a part in a fullstack role, but leading a frontend position developing React applications. As a lead frontend developer my daily operations include working closely with Node js developers and UI/UX team in a sprint-driven environment. Tasks include modern browser compatibility, mobile scalability and mobile platform built. Frontend is developed in React. <u>(www.harvardintechseattle.com)</u>
            <div className="project-page-paragraph-techologies"><b>Technologies used:</b></div>
            <p className='projects-page-stack'>React, Redux, CSS, Node, Express, API, MongoDB, Mocha, React Testing Library, +DevOps including CI/CD</p>
            <hr/>
            </div>

            <div className="about-page-paragraph">
            <div className='company-background'>@More Projects</div>I have developed WordPress sites in my spare time. Contributed creating GraphQL backend setting up Apollo servers. I helped built Node js servers and models. Contributed to Ruby on Rails and PHP projects. Created and deployed <u>(www.emberjsschool.com)</u> online tutorial website and contributed to teaching Ember js cources on youtube. I was the developer and UI/UX designer for <u>(www.sergiovassio.com)</u> photography website. <br/>
            <div className="project-page-paragraph-techologies"><b>Technologies used: </b></div>
            <p className='projects-page-stack'>Node, GraphQL, PHP, Ruby on Rails, DevOps, CSS, Ember Js, HTML, WordPress.</p>
            <hr/>
            </div>
            <div className='code-line'>npm install more</div>
            
      </div>
    </div>
  );
}

export default Portfolio;
