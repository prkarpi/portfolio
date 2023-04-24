import { useEffect, useState } from "react";

import { Link } from 'react-router-dom';


function App() {
  return (
    <div>
        <div><Link to='/'>home</Link></div>
            {/* <div className="names-col">
                <div className="first-last-name-div">Serge Vassiliev</div>
                <div className="fullstack-div">Fullstack Developer</div>
            </div>
            <div className="projects-div">About Projects Contact</div> */}

        <div class="box">
            <div className="cell-spacer"></div>
            <div className="first-last-name-div">Sergey Vassiliev</div>
            <div className="fullstack-div">Fullstack Developer</div>
           
            <div className="menu-div">
                <div><Link to='/about' className="project-link">About</Link></div>
                <div><Link to='/projects' className="project-link">Projects</Link></div>
                <div><Link to='/contact' className="project-link">Contact</Link></div>
            </div>
      </div>
    </div>
  );
}

export default App;
