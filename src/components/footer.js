import React from 'react';

import FB from '../assets/social/facebook-white.svg';
import Instagram from '../assets/social/instagram-white.svg';
import Twitter from '../assets/social/twitter-white.svg';

import AppleStore from '../assets/store/app-store.svg';
import PlayStore from '../assets/store/play-store.svg';
import WindowsStore from '../assets/store/windows-store.svg';


const Footer = () => (
    <div className="footer-wrapper">
        <div className="container">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Collection Statement</a></li>
                <li><a href="#">Manage Account</a></li>
            </ul>
            <p>Copyright &#169; 2016 DEMO Streaming. All Rights Reserved</p>
            <div className="footer-grids">
                <div className="social-media">
                    <FB />
                    <Instagram />
                    <Twitter />
                </div>
                <div className="store-icons">
                    <AppleStore />
                    <PlayStore />
                    <WindowsStore />
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
