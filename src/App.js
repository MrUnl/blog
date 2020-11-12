import { useState } from 'react';
import './style.scss';


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
            <a className="instagram" target="_blank" href="https://instagram.com/mr_unl">
                <span class="fa fa-instagram"></span>
            </a>
            <a className="github" target="_blank" href="https://github.com/MrUnl">
                <span class="fa fa-github"></span>
            </a>
            <a className="twitter" target="_blank" href="https://twitter.com/mr_unl">
                <span class="fa fa-twitter"></span>
            </a>
            </div>
        </div>
        </>
    );
}

export default App;