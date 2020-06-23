
import React, { Component } from 'react'
import {Link, Route} from "react-router-dom";


class Featurecard extends Component {
    render() {
        return (


            <div className="card">
                <div className="img-container">
                    <img alt={this.props.title} src={this.props.image} />
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <strong>Title:</strong> {this.props.title}
                        </li>
                        <li>
                            <strong>Description:</strong> {this.props.description}
                        </li>
                        <li>
                            <strong>Technology:</strong> {this.props.technology}
                        </li>
                    </ul>
                    <a href={this.props.href} type="button" target="_blank" className="btn btn-danger">See Application</a>
                </div>
            </div>
        )
    }
}

export default Featurecard


