import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/index';
import Portfolio from './pages/pagePortfolio';
import Header from './pages/header'
import Footer from './pages/footer';
import About from './pages/pageAbout';
import Contact from './pages/pageContact';

const Router = () => {
  return(
    <BrowserRouter>
      {/* <Header/> */}
     
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default Router;