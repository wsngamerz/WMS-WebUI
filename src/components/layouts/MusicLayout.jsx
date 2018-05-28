import React, { Component } from "react";

import Navigation from "../Navigation";

class MusicLayout extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default MusicLayout;
