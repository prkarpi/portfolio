import HeaderModule from './headerModule';


const Education = () => {
  return (
    <div>
        <HeaderModule/>
        <div class="box-about-page fade-in">
        <div className="page-header">Education</div>
           
        <div className="about-page-paragraph">
        <div className='company-background'>@Metropolitan State University</div><br/>
        Attended and received a Bachelor's degree in Arts. Graduated with honors and an overall gpa of 3.4.
        <br/>
        <div className='company-background'>@Self-discipline, self-lerner</div><br/>
        Beginning with an HTML book in the 2000's, I have never quit the discipline of learning. My passion for software engineering grew from basic HTML coding to complex JavaScript development. Starting with PHP as my first backend environment, it grew into Ruby on Rails. After that, React and Node have became a huge part of my interest and my primary to-go tools. Today I am a JavaScript developer. 
        <br/>
        <div className='company-background'>@Davinci Coders</div><br/>
        Attended and received a Ruby on Rails certificate.
        <br/>
        <div className='company-background'>@Continuing Education</div><br/>
        I am always striving to learn and conquer new technologies as much as needed to stay competitive.
        <br/>
        <hr/>
        <div className='code-line'>npm install even-more</div>
        </div>
        
        </div>
    </div>
  );
}

export default Education;
