import React, { Component } from "react";

class Stat extends Component {
    render() {
        return (
            <article className="stats">
                <span className="name">{this.props.name}</span>
                <span className="num">{this.props.number}</span>
            </article>
        );
    }
}

export default Stat;
