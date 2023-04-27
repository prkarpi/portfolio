import { useEffect, useState } from "react";

import { Link } from 'react-router-dom';


function App() {
  return (
    <div>
        <div><Link to='/'>home&#8249;</Link></div>
        <div class="box-about-page">
            <div className="about-page-header">About</div>
           
            <div className="about-page-paragraph">
            Hello! Shalom! Hola! Ciao! Привіт! Konnichiwa! Привет! Assalamu alaikum! Nǐ hǎo! Shikamoo! 
            <br/>I am Serge. I am a Fullstack Developer residing in Denver, Colorado. I am passionate about developing software for the web, traveling, writing music, automechanics, photography and culture. Beginning in my teenage years I grew fond of computers and after reading thick books I found my first job creating websites writing HTML, CSS and PHP. Today I am still passionate developing software for the web using modern techologies. I enjoy seeing my creativity come to life wether it is music, photography or developing software.
            </div>
      </div>
    </div>
  );
}

export default App;
