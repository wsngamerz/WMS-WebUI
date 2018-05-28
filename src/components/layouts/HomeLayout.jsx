import React, { Component } from "react";

import Navigation from "../Navigation";
import Footer from "../Footer";

class HomeLayout extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                {this.props.children}
                <Footer />
            </React.Fragment>
        );
    }
}

export default HomeLayout;
