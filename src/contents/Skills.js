  
import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect';


class Skills extends Component {


    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Technical Skills</h1>
            <ReactTypingEffect className="typingeffect" text={["MERN stack, HTML (including HTML5), CSS (grid and flexbox), Bootstrap, Semantic UI, Bulma, Javascript, Node, Express, jQuery, EJS, Bootstrap, React, SQL (including Sequelize), AJAX,  MongoDB (including Mongoose), Docker, Kubernetes, AWS, AXIOS, API, Github, Gitbash, Draw.io, MS Paint, Jira, Confluence, Trello, Jazz"]} speed={30} eraseDelay={200000} typingDelay={0}/>

            <h1 className="subtopic">My Business Skills</h1>
            <ReactTypingEffect className="typingeffect" text={["Scrum, Kanban, Lean, SAFe, TDD, ATD, XP (paired programming), Component based development, Reusable Code, MVP/prototyping, User Stories, Scrum Ceremonies, Scrum Metrics, Presentation, Coaching, Leadership, Software Testing, Requirements, Documentation, Design"]} speed={30} eraseDelay={200000} typingDelay={11000}/>

            </div>
            )
        }
    }
    
    export default Skills


 