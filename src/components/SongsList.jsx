import React, { Component } from "react";

import Song from "./Song";

const API = window.location.protocol + "//" + window.location.hostname + "/api/v1/music/songs/";

class SongsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            loading: false,
            error: null
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch(API)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Somthing went wrong!");
                }
            })
            .then(data => this.setState({ songs: data, loading: false }))
            .catch(error => this.setState({ error, loading: false }));
    }

    render() {
        const { songs, loading, error } = this.state;
        let songList = [];

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>{error.message}</div>;
        }

        if (songs.status) {
            const songListData = songs.result;
            songList = songListData.map((song) => {
                return <Song key={song.id} id={song.id} imgid={song.image.id} name={song.name} artist={song.artist.name} album={song.album.name} />;
            });
            return <section className="songlist">{songList}</section>;
        } else {
            return <div>Error?</div>;
        }
    }
}

export default SongsList;
