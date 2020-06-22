//imports for react and sub component
import React, { Component } from 'react';
import Navitem from './Navitem';


//declaring the react parent component
//later the component will have sub-components (navitems)
//each navitem sub-component has 2 props item (the display) and tolink (the route)
class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <Navitem item="Home" tolink = "/"></Navitem>
                    <Navitem item="About" tolink = "/about"></Navitem>
                    <Navitem item="Education" tolink = "/education"></Navitem>
                    <Navitem item="Skills" tolink = "/skills"></Navitem>
                    <Navitem item="Contact" tolink = "/contact"></Navitem>
                </ul>
            </nav>
        )
    }
}

//exports to be rendered by app/index
export default Navbar