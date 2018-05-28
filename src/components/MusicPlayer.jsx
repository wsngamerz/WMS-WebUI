import React, { Component } from "react";

class MusicPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            loop: false,
            current: window.wms.music.playing,
            next: {}
        };

        this.play = this.play.bind(this);
        this.loop = this.loop.bind(this);
        this.updatePlayerinfo = this.updatePlayerinfo.bind(this);
    }

    play() {
        let { playing } = this.state;
        let audio = document.getElementsByClassName("player-music-audio")[0];
        let button = document.getElementsByClassName("playpause")[0];
        if (audio.src == "") {
            this.updatePlayerinfo();
        }
        if (playing) {
            playing = false;
            audio.pause();
            button.innerHTML = "play_arrow";
        } else {
            playing = true;
            audio.play();
            button.innerHTML = "pause";
        }
        this.setState({ playing: playing });
    }

    loop() {
        let { loop } = this.state;
        let audio = document.getElementsByClassName("player-music-audio")[0];
        let button = document.getElementsByClassName("loop")[0];
        if (loop) {
            loop = false;
            audio.loop = false;
            button.classList.remove("active");
        } else {
            loop = true;
            audio.loop = true;
            button.classList.add("active");
        }
        this.setState({ loop: loop });
    }

    formatTime(time) {
        let timeString = "";
        let totalHours = Math.floor(time / 3600);
        let totalMinutes = Math.floor((time - totalHours * 3600) / 60);
        let totalSeconds = ("0" + Math.floor(time - totalMinutes * 60)).slice(-2);
        if (totalHours != 0) {
            timeString = totalHours + ":" + totalMinutes + ":" + totalSeconds;
        } else {
            timeString = totalMinutes + ":" + totalSeconds;
        }
        return timeString;
    }

    updatePlayerinfo() {
        let spanName = document.getElementsByClassName("name")[0];
        let spanArtist = document.getElementsByClassName("artist")[0];
        let spanAlbum = document.getElementsByClassName("album")[0];
        let spanCover = document.getElementsByClassName("player-music-cover")[0];
        let audio = document.getElementsByClassName("player-music-audio")[0];
        let button = document.getElementsByClassName("playpause")[0];
        const mediaLocation = window.location.protocol + "//" + window.location.hostname + "/media/";
        const coverLocation = mediaLocation + "covers/" + this.state.current.img;
        const audioLocation = mediaLocation + "song/" + this.state.current.id;
        spanName.innerHTML = this.state.current.name;
        spanArtist.innerHTML = this.state.current.artist;
        spanAlbum.innerHTML = this.state.current.album;
        spanCover.style.backgroundImage = "url(" + coverLocation + ")";
        audio.src = audioLocation;
        const playing = true;
        audio.play();
        button.innerHTML = "pause";
        this.setState({ playing: playing });

    }

    updateTimeline() {
        let _this = this;
        setInterval(() => {
            if (_this.state.current != window.wms.music.playing) {
                _this.setState({ current: window.wms.music.playing });
                _this.updatePlayerinfo();
            }
            if (_this.state.playing) {
                let audio = document.getElementsByClassName("player-music-audio")[0];
                let currentSpan = document.getElementsByClassName("player-timeline-current")[0];
                let totalSpan = document.getElementsByClassName("player-timeline-total")[0];
                let timeline = document.getElementsByClassName("player-timeline-progress")[0];
                let timeTotal = audio.duration;
                let timeCurrent = audio.currentTime;

                let timeTotalString = _this.formatTime(timeTotal);
                let timeCurrentString = _this.formatTime(timeCurrent);

                currentSpan.innerHTML = timeCurrentString;
                totalSpan.innerHTML = timeTotalString;
                let percent = timeCurrent / timeTotal;
                if ((Number.isInteger(percent)) || (Number.isFinite(percent))) {
                    timeline.value = percent;
                } else {
                    timeline.value = 0;
                }
            }
        }, 100);
    }

    render() {
        const location = window.location.protocol + "//" + window.location.hostname + "/media/covers/1";
        const cover = {
            backgroundImage: "url(" + location + ")"
        };
        this.updateTimeline();
        return (
            <section className="player-music">
                <section className="player-music-song">
                    <section className="player-music-cover" style={cover} />
                    <section className="player-music-details">
                        <span className="name">Unknown Song</span>
                        <span className="artist">Unknown Artist</span>
                        <span className="album">Unknown Album</span>
                    </section>
                </section>
                <audio className="player-music-audio">
                    <source src="" />
                </audio>
                <section className="player-music-main">
                    <section className="player-music-controls">
                        <span className="player-control icon">shuffle</span>
                        <span className="player-control icon">skip_previous</span>
                        <span className="player-control icon playpause" onClick={this.play}>
                            play_arrow
                        </span>
                        <span className="player-control icon">skip_next</span>
                        <span className="player-control icon loop" onClick={this.loop}>
                            replay
                        </span>
                    </section>
                    <section className="player-music-timeline">
                        <span className="player-timeline-current">00:00</span>
                        <progress className="player-timeline-progress" max="1" value="0" />
                        <span className="player-timeline-total">00:00</span>
                    </section>
                </section>
            </section>
        );
    }
}

export default MusicPlayer;
