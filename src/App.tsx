
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Algorithm from "./pages/Algorithm";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App()
{
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
          <div className="body-wrapper">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="algorithm/:id" element={<Algorithm/>}></Route>
              <Route path="*" element={<NotFound/>}></Route>
            </Routes>
          </div>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;