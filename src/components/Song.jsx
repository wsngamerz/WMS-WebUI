import React, { Component } from "react";

class Song extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                id: this.props.id,
                name: this.props.name,
                artist: this.props.artist,
                album: this.props.album,
                img: this.props.imgid
            }
        };
        this.playSong = this.playSong.bind(this);
    }

    playSong() {
        console.log("Playing song with id: " + this.state.data.id);
        window.wms.music.playing = this.state.data;
    }

    render() {
        const location = window.location.protocol + "//" + window.location.hostname + "/media/covers/" + this.props.imgid;
        const cover = {
            backgroundImage: "url("+ location + ")"
        }
        return (
            <section className="song">
                <article className="song-cover" style={cover} />
                <article className="song-details">
                    <span className="song-name">{this.props.name}</span>
                    <span className="song-artist">{this.props.artist}</span>
                    <span className="song-album">{this.props.album}</span>
                </article>
                <article className="song-more">
                    <span className="icon" onClick={this.playSong}>play_arrow</span>
                </article>
            </section>
        );
    }
}

export default Song;
