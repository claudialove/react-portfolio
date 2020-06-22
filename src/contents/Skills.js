  
import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':["MERN stack", "HTML(including HTML5)", "CSS (grid and flexbox)", "Bootstrap", "Semantic UI", "Bulma", "Javascript", "Node", "Express", "jQuery", "EJS", "Bootstrap", "React", "SQL (including Sequelize)", "AJAX",  "MongoDB (including Mongoose)", "Docker", "Kubernetes", "AWS", "AXIOS", "API", "Github", "Gitbash", "Draw.io", "MS Paint", "Jira", "Confluence", "Trello", "Jazz", "Scrum", "Kanban", "Lean", "SAFe", "TDD", "ATD", "XP (paired programming)", "Component based development", "reusable code",  "MVP/prototyping", "User Stories", "Scrum Ceremonies", "Presentation", "Coaching", "Leadership", "Software Testing",  "Requirements", "Documentation", "Design"
        ]
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills