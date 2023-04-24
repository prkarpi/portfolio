import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
        <div><Link to='#'>home</Link></div>
            <div className="names-col">
                <div className="first-last-name-div">Serge Vassiliev</div>
                <div className="fullstack-div">Fullstack Developer</div>
            </div>
     <div className="projects-div">About Projects Contact</div>
</div>
  );
}

export default App;
