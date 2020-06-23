
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
                    <Link to={this.props.href}>
                        <button type="button" className="btn btn-danger">See Application</button>
                    </Link>

                </div>
            </div>

        )
    }
}

export default Featurecard


