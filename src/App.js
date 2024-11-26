import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Componetns/Navbar';
import Footer from './Componetns/Footer';
import Home from './Pages/Home';
import FirstYear from './Pages/FirstYear';
import Contacts from './Pages/Contacts';
import SuperTicTacToe from './Pages/SuperTicTacToe';
import PointGame from './Pages/AAimGame';
import './Styles/Pages.css';
import './Styles/Navbar.css';
import './Styles/Footer.css';
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
                    <Route path="/contact" element={<Contacts />} />
                    <Route path='/supertictactoe' element={<SuperTicTacToe />} />
                    <Route path='/aimtrainer' element={<PointGame />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default App;
