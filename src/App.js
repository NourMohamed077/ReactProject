import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ProductPage from "./Pages/Products";
import Shopping from "./Pages/Shopping-Cart";
import About from "./Pages/About-Us";
import Contact from "./Pages/Contact-Us";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Products" element={<ProductPage/>}/>
          <Route path="/Shopping-Cart" element={<Shopping/>}/>
          <Route path="/About-Us" element={<About/>}/>
          <Route path="/Contact-Us" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;