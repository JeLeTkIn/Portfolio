import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Componetns/Navbar';
import Footer from './Componetns/Footer';
import Home from './Pages/Home';
import FirstYear from './Pages/FirstYear';
import Projects from './Pages/projects';
import Contacts from './Pages/Contacts';
import SuperGame from './Pages/SuperTicTacToe';
import AimGame from './Pages/AAimGame';
import './Styles/Pages.css';
import './Styles/Navbar.css';
import './Styles/Footer.css';
import "./Styles/Carousel.css";
import "./Styles/SuperTicTacToe.css";
import "./Styles/AimGame.css";


const App = () => {
    return (
        <>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-me" element={<FirstYear />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contacts />} />
                    <Route path='/projects/1' element={<SuperGame />} />
                    <Route path='/projects/2' element={<AimGame />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default App;
