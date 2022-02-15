import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  }, [isOpen]);

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
