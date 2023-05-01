import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/index';
import Portfolio from './pages/pagePortfolio';
import About from './pages/pageAbout';
import Contact from './pages/pageContact';
import Education from './pages/pageEducation'

const Router = () => {
  return(
    <BrowserRouter>
      {/* <Header/> */}
     
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Portfolio/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/education" element={<Education/>}/>
        </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default Router;