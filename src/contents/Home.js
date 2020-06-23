import React, {Component } from 'react';
import profilepic from '../img/claude.PNG'
import ReactTypingEffect from 'react-typing-effect';
import Contact from '../contents/Contact';


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <h1 className="name">Claudia Love Petty</h1>
            <img src={profilepic} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['Hello!', 'I am a Web Developer', ' ...and an Agilist' ]} speed={60} eraseDelay={600} typingDelay={0}/>
            <Contact />
            </div>
        )
    }
}

export default Home