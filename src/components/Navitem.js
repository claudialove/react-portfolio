//importing Link which acts like an anchor tag in react
import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Navitem extends Component {
    render() {
        return (
            <li id={this.props.item}>
                <Link to={this.props.tolink} onClick={this.props.activec.bind(this, this.props.item)}>{this.props.item}</Link>
            </li>
        )
    }
}
 
//bind method above is used to to bind the current instance and the input to be sent
export default Navitem;
