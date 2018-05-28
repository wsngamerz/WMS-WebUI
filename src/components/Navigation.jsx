import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navOpen: false
        };
        this.toggleNavigation = this.toggleNavigation.bind(this);
    }

    toggleNavigation() {
        this.setState({ navOpen: !this.state.navOpen });
    }

    render() {
        let openClasses = "nav-link-container";
        if (this.state.navOpen) {
            openClasses += " open";
        }
        return (
            <nav className="navbar">
                <span className="nav-toggle icon icon-menu" onClick={this.toggleNavigation}>
                    menu
                </span>
                <span className="nav-search icon icon-search">search</span>
                <span className="nav-account icon icon-account_circle">account_circle</span>
                <Link className="nav-brand" to="/">
                    Wills Media Server
                </Link>
                <section className={openClasses}>
                    <Link className="nav-link" to="/music">
                        Music
                    </Link>
                    <Link className="nav-link" to="/films">
                        Films
                    </Link>
                    <Link className="nav-link" to="/tv">
                        TV
                    </Link>
                </section>
            </nav>
        );
    }
}

export default Navigation;
