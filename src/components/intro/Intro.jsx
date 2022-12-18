import React from 'react';
import reactLogo from '../../assets/logo.svg';
import './Intro.scss';

const Intro = () => {
  return (
    <div className='intro-main-container'>
        <div className="intro-left">
            <div className="left-wrapper">
            <h2 className='i-intro'>Hello, My name is</h2>
            <h1 className='i-name'>Angelo de Oliveira</h1>
            <div className="title-container">
                <div className="title-wrapper">
                    <div className="title-item">Fullstack Web Developer</div>
                    <div className="title-item">React JS Lover</div>
                    <div className="title-item">UX / UI Designer</div>
                    <div className="title-item">SEO Expert</div>
                    <div className="title-item">Content Creator</div>
                </div>
            </div>
            <div className="i-description">
                <p>
                I'm a web developer and learning about hybrid mobile apps. I love React since I learn it, and also love coding fullstack apps. <br />
                By the way I speak 4 languages (Spanish, English, Portuguese, German and learning Chinese).
                Hope I can help you with anything, and if you have a good remote offer just hit me up.
                </p>
            </div>
            </div>
        </div>
        <div className="intro-right">
            <div className="i-bg">
            
            </div>
            <img src={reactLogo} alt="Intro" />
            
            <div className="right-wrapper">
            
            </div>
        </div>
    </div>
  )
}

export default Intro