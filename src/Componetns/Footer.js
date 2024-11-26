import React from 'react';
import '../Styles/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <p className='rights'>© 2024 Karymbaev Nurlan. All rights reserved.</p>
            <div className="footer-links">
                <a href="https://github.com/JeLeTkIn" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="/contact">Contact</a>
            </div>
        </footer>
    );
};

export default Footer;