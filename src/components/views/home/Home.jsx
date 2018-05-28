import React, { Component } from "react";

import HomeLayout from "../../layouts/HomeLayout";
import Button from "../../Button";
import Statistics from "../../Statistics";

class Home extends Component {
    render() {
        return (
            <HomeLayout>
                <h1 className="title">An all in one, Open sourced media server</h1>
                <section className="button-group">
                    <Button type="success">Login</Button>
                    <Button type="info">Register</Button>
                </section>
                <Statistics />
            </HomeLayout>
        );
    }
}

export default Home;
