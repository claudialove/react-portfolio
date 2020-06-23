import React, { Component } from 'react'
import Featurecard from '../components/Featurecard';
import patternspic from '../img/pattern.PNG'
import candypic from '../img/candies.PNG'
import { Flex } from "../components/Flex";
import password from '../img/password.PNG'
import sky from '../img/sky.PNG'
import quiz from '../img/quiz.PNG'
import cat from '../img/cat.PNG'


class Portfolio extends Component {


    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Featured Projects</h1>
            <Flex container display="flex" wdith="90%" margin="50px auto" flexDirection="row" justifyContent="space-between">
                <Featurecard title="Patterns" description="A demonstration of a flexible site with complex layout" technology="Flexbox | Bootstrap | HTML | CSS | JS" image={patternspic} href="https://claudialove.github.io/bootstrap-with-flexbox-demo-site/"/>
                <Featurecard title="Candy Museum" description="A demonstration of a flexible site with complex layout" technology="Flexbox | Bootstrap | HTML | CSS | JS" image={candypic} href="https://claudialove.github.io/complex-layout-simple-site-flexbox/" />
                <Featurecard title="Password Generator" description="A demonstration of user input and programmatic output" technology="JS | CSS | HTML | Bootstrap" image={password} href="https://claudialove.github.io/password-generator/" />
                <Featurecard title="Weather Dashboard" description="A demonstration of rendering API based output" technology="AJAX | jQuery | JS" image={sky} href="https://claudialove.github.io/weather-app/" />
                <Featurecard title="Quiz Game" description="A timed quiz written wtih javascript" technology=" JS | HTML | CSS" image={quiz} href="https://claudialove.github.io/weather-app/" />
                <Featurecard title="Purrfect Match" description="An imaginary homepage for an imaginary business" technology=" Bootstrap | HTML | CSS" image={cat} href="https://claudialove.github.io/purrrfic-match-static-bootstrap/" />

            </Flex>
        </div>
        )
    }
}

export default Portfolio