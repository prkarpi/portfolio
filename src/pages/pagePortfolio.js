import { Link } from 'react-router-dom';


function App() {
  return (
    <div>
        <div><Link to='/'>home&#8249;</Link></div>
        <div class="box-about-page fade-in">
            <div className="about-page-header">Projects</div>
           
            <div className="about-page-paragraph">
            From my first employer at NYC firm where I have gained a collosal amount of knowledge and experience my team worked with such names as New York Post Sports Section, Audemars Piguet, Hard Candy, 
            <div className="about-page-paragraph-techologies"><b>Techologies and Stacks</b><hr/>
            <p>React, Node, CSS, Typescript, MongoDB, MySql, Express, Mongoose, DevOps, Git/hub</p></div>
            </div>
            
      </div>
    </div>
  );
}

export default App;
