import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';  

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='nav-container'>
                <h1>My Portfolio</h1>
                <Link to="/" className="nav-links">Home</Link>
                <Link to="/about-me" className="nav-links">About Me</Link>
                <Link to="/supertictactoe" className="nav-links">SuperTicTacToe</Link>
                <Link to="/aimtrainer" className="nav-links">AimTrainer</Link>
            </div>
        </nav>
    );
};

export default Navbar;