import { Link } from 'react-router-dom';


function App() {
  return (
    <div>
        <div><Link to='/'>home&#8249;</Link></div>
        <div class="box-about-page fade-in">
            <div className="about-page-header">About</div>
           
            <div className="about-page-paragraph">
            Hello! Shalom! Hola! Ciao! Привіт! Konnichiwa! Привет! Assalamu alaikum! Nǐ hǎo! Shikamoo! 
            <br/><br/>I am Serge. I am a Fullstack Developer residing in Denver, Colorado. I am passionate about developing software for the web, traveling, writing music, automotive techologies, photography and culture. Beginning in my teenage years I grew fond of computers and after reading a few thick books I found my first job creating websites writing HTML, CSS and PHP. Today I am still passionate about developing software for the web using modern techologies. I enjoy seeing my creativity come to life wether it is music, photography or developing software.
            <div className="about-page-paragraph-techologies"><b>Techologies and Stacks</b><hr/>
            <p>React, Node, CSS, Typescript, MongoDB, MySql, Express, Mongoose, DevOps, Git/hub</p></div>
            </div>
            
      </div>
    </div>
  );
}

export default App;
