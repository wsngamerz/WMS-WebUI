import React from "react";
import Loadable from "react-loadable";

import Loading from "./components/Loading";

const HomePath = "./components/views/home/";
const MusicPath = "./components/views/music/";

export const HomeView = Loadable({
    loader: () => import(HomePath + "Home"),
    loading: () => <Loading />
});

export const MusicView = Loadable({
    loader: () => import(MusicPath + "Music"),
    loading: () => <Loading />
});
