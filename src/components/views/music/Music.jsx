import React, { Component } from "react";

import MusicLayout from "../../layouts/MusicLayout";
import MusicPlayer from "../../MusicPlayer";
import SongsList from "../../SongsList";

class Music extends Component {
    render() {
        return (
            <MusicLayout>
                <h1 className="title">Music</h1>
                <SongsList />
                <MusicPlayer />
            </MusicLayout>
        );
    }
}

export default Music;
