import React, {Component } from 'react';
import profilepic from '../img/claude.PNG'
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['Claudia Love Petty','Web Developer', 'Agilist']} speed={75} eraseDelay={700}/>
            <Social />
            </div>
        )
    }
}

export default Home