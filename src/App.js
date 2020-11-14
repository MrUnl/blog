import { useState } from 'react';
import './style.scss';
import { FaInstagram,FaGithub,FaTwitter } from "react-icons/fa";

function App() {
    
    return (
        <>
        <img src="consturction.svg"></img>
        <div className="texts">
            <p>This Site is Under Development</p>
            <div className="social-text">
                <div></div>
                <h3>Socials</h3>
                <div></div>
            </div>
            <div className="socials">
            <a className="instagram" target="_blank" href="/ig">
               <FaInstagram/>
            </a>
            <a className="github" target="_blank" href="/github">
                <FaGithub/>
            </a>
            <a className="twitter" target="_blank" href="/tt">
                <FaTwitter/>
            </a>
            </div>
        </div>
        </>
    );
}

export default App;