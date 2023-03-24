import { useState } from 'react';
import ThemeContext from "./context/ThemeContext"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Home from './pages/Home/Home';
import Snippet from './pages/Snippet/Snippet';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='container'>
        <BrowserRouter>
          <Nav />
          <Routes>
              <Route index element={<Home />} />
              <Route path='/snippet' element={<Snippet />} />
              <Route path='/portfolio' element={<Portfolio />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
