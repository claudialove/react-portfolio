import React, { Component } from 'react';

class Skillcard extends Component {
    render() {
        return (
            <div class="widecard">
                <div class="compdet">
                    <h3>{this.props.title}</h3>
                    <h5 class="secondtext">{this.props.list}</h5>
                </div>
            </div>
        )
    }
}
export default Skillcard