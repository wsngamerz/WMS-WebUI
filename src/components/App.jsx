import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import HomeLayout from "./layouts/HomeLayout";
import * as Routes from "../routes";

import "../static/sass/main.scss";

window.wms = {
    music: {
        playing: {}
    }
};

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Routes.HomeView} />
                    <Route exact path="/music" component={Routes.MusicView} />
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
