import React, { Component } from "react";

class Button extends Component {
    render() {
        const classes = "button button-" + this.props.type;
        return <button className={classes}>{this.props.children}</button>;
    }
}

export default Button;
