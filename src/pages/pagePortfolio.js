import HeaderModule from './headerModule';

const Portfolio = () => {
  return (
    <div>
        <HeaderModule/>
        <div class="box-about-page fade-in">
            <div className="page-header">Projects</div>
           
            <div className="about-page-paragraph">
            <div className='company-background'>@IDSociety</div> My first employer at a NYC firm allowed me to gain a colossal amount of knowledge and experience as our team worked with such names as the New York Post Sports Section, Audemars Piguet, Hard Candy, the Baltimore Ravens, and more. As a lead frontend developer, my daily operations included working cooperatively with client services, sales, and the design team in a deadline-driven environment; producing websites compatible with multiple browsers; working with backend developers and design team members to meet the requirements for functionality, scalability, and performance. Coded using HTML, CSS, PHP, and JavaScript to develop rich and performance-oriented content. (www.idsociety.com) - sadly, company has shut down its doors.
            <div className="project-page-paragraph-techologies"><b>Technologies used:</b></div>
            <p className='projects-page-stack'>Javascript, HTML, CSS, PHP, </p>
            <hr/>
            </div>

            <div className="about-page-paragraph">
            <div className='company-background'>@Harvard in Tech Seattle</div> My current position is of mammoth proportions, involving the Machine Learning and Data Science Team, where I take part in a fullstack role while leading a frontend team developing React applications. Contributing ideas and suggestions in team meetings and delivering updates on deadlines, designs, and enhancements collaborating with cross-functional development team members to analyze potential system solutions based on evolving client requirements. As a lead frontend developer, my daily operations include working closely with Node js developers and the UI/UX team in a sprint-driven environment. Tasks include modern browser compatibility, mobile scalability, and mobile platform building. Collaborating with and advising DevOps team members on the CI/CD implementations in the Azure environment (www.harvardintechseattle.com).
            <div className="project-page-paragraph-techologies"><b>Technologies used:</b></div>
            <p className='projects-page-stack'>React, Redux, CSS, Node, Express, API, MongoDB, Mocha, React Testing Library, +DevOps including CI/CD</p>
            <hr/>
            </div>

            <div className="about-page-paragraph">
            <div className='company-background'>@More Projects</div>I have developed WordPress sites in my spare time. Contributed to creating the GraphQL backend and setting up the Apollo server. I helped build Node js servers and models. Contributed to Ruby on Rails and PHP projects. Created and deployed (www.emberjsschool.com) an online tutorial website and contributed to teaching Ember JS courses on YouTube. I was the developer and UI/UX designer for (www.sergiovassio.com) photography website. <br/>
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
