import { Link } from 'react-router-dom';

const HeaderModule = () => {
  return (
    <>
    <div className='home-link'><Link to='/' className="project-link">_home</Link></div>
    <div className='copyright'>&#9400;2026</div>
    </>
  );
}

export default HeaderModule;
