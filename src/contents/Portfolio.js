import React, { Component } from 'react'
import Featurecard from '../components/Featurecard';

import patternspic from '../img/pattern.PNG'
import candypic from '../img/candies.PNG'
import { Flex } from "../components/Flex";


class Portfolio extends Component {


    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Featured Projects</h1>
            <Flex container display="flex" wdith="90%" margin="50px auto" flexDirection="row" justifyContent="space-between">
                <Featurecard title="Patterns" description="A demonstration of a flexible site with complex layout" technology="Flexbox | Bootstrap | HTML | CSS | JS" image={patternspic} href="https://claudialove.github.io/bootstrap-with-flexbox-demo-site/"/>
                <Featurecard title="Candy Museum" description="A demonstration of a flexible site with complex layout" technology="Flexbox | Bootstrap | HTML | CSS | JS" image={candypic} href="https://claudialove.github.io/complex-layout-simple-site-flexbox/" />
            </Flex>
        </div>
        )
    }
}

export default Portfolio