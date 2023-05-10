import HeaderModule from './headerModule';


const About = ()  => {
  return (
    <div>
        <HeaderModule/>
        <div class="box-about-page fade-in">
            <div className="page-header">About</div>
           
            <div className="about-page-paragraph">
            Hello! Shalom! Hola! Ciao! Привіт! Konnichiwa! Привет! Assalamu alaikum! Nǐ hǎo! Shikamoo! 
            <br/><br/>I am Serge. I am a Fullstack Developer residing in Denver, Colorado. I am passionate about developing software for the web, traveling, writing music, automotive technologies, photography, and culture. Beginning in my teenage years, I grew fond of computers, and after reading a few thick books, I found my first job creating websites, writing HTML, CSS, and PHP. Today, I am still passionate about developing software for the web using modern technologies. I enjoy seeing my creativity come to life, whether it is in music, photography, or developing software.
            <div className="about-page-paragraph-techologies"><b>Techologies and Stacks</b><hr/>
            <div className='about-page-paragraph-techologies-stack'>
                <ul>
                    <li>React</li>
                    <li>Node</li>
                    <li>CSS</li>
                    <li>Typescript</li>
                    <li>MongoDB</li>
                    <li>Ruby on Rails</li>
                    <li>MySql</li>
                    <li>Express</li>
                    <li>Mongoose</li>
                    <li>DevOps</li>
                    <li>UI/UX</li>
                    <li>PHP</li>
                </ul>
            </div>
            </div>
            </div>
            
        </div>
    </div>
  );
}

export default About;
