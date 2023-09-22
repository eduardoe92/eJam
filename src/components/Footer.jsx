import React from 'react';
import './Footer.css';
import { Lock } from './Icons';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                Copyright © 2023 | <a href="mailto:clarifionsupport@clarifion.com">clarifionsupport@clarifion.com</a>
            </div>
            <div className="footer-right">
                <Lock/>
                {' '}Secure 256-Bit SSL Encryption{' '}
            </div>
        </footer>
    );
}

export default Footer;

