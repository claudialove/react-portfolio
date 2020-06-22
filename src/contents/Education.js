import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Professional Certificate: Full Stack Web Development" where="George Washington University" from="March 2020" to="June 2020"/>
            <Widecard title="Bachelors of Science: Computer Science" where="University of the People" from="March 2018" to="May 2023"/>
            <Widecard title="Associates of Science: Veterinary Technology" where="Northern Virginia Communicaty College" from="August 1999" to="May 2001"/>
            <Widecard title="Certified Scrum Master" where="Scrum Alliance" from="March 2015" to="May 2023"/>
            <Widecard title="Certified Product Owner" where="Scrum Alliance" from="March 2015" to="May 2023"/>
            <Widecard title="Certified Software Tester" where="ISTQB" from="Oct 2015" to="no exp"/>
            </div>
            )
        }
    }
    
export default Education