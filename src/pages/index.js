import { Link } from 'react-router-dom';
import HeaderModule from './headerModule';

const Home = () => {
  return (
    <div>
        <HeaderModule/>
            {/* <div className="names-col">
                <div className="first-last-name-div">Serge Vassiliev</div>
                <div className="fullstack-div">Fullstack Developer</div>
            </div>
            <div className="projects-div">About Projects Contact</div> */}

        <div class="box fade-in">
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

export default Home;
