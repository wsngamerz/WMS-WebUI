import React, { Component } from "react";

import Stat from "./Stat";
import Button from "./Button";

class Statistics extends Component {
    render() {
        return (
            <section className="statistics">
                <h3 className="subtitle">Statistics</h3>
                <Stat name="Songs" number="63,872" />
                <Stat name="Films" number="753" />
                <Stat name="Episodes" number="3,394" />
                <Button type="success block">More Statistics</Button>
            </section>
        );
    }
}

export default Statistics;
