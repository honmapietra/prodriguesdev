import React from 'react';
import './styles.css'


import ImageInsta from './image/insta.png';
import ImageTwitter from './image/tt.png';
import ImageGitHub from './image/github.png';
import ImageLinkedin from './image/linkdin.png';


const Contacts = () => {
    return (
        <div className="container-contacts">
            <div className="social-contact">
                <div className="social-contact-links">
                    <div className="instagram-link">
                        <a href="https://instagram.com/u_ki.yo" alt="link to instagram" target="_blank" rel="noopener noreferrer">
                            <img src={ImageInsta} alt="Ícone Instagram" />
                        </a>
                    </div>
                    <div className="twitter-link">
                        <a href="https://twitter.com/httpyetra" alt="link to twitter" target="_blank" rel="noopener noreferrer">
                            <img src={ImageTwitter} alt="Ícone Twitter" />
                        </a>
                    </div>
                    <div className="github-link">
                        <a href="https://github.com/honmapietra" alt="link to github" target="_blank" rel="noopener noreferrer">
                            <img src={ImageGitHub} alt="Ícone GitHub" />
                        </a>
                    </div>
                    <div className="linkedin-link">
                        <a href="https://www.linkedin.com/in/pietratomords/" alt="link to linkedin" target="_blank" rel="noopener noreferrer">
                            <img src={ImageLinkedin} alt="Ícone Linkedin" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contacts;