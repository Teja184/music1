import { atom } from "jotai";


const sideNavBarState = atom(false);
const playerState = atom({
    play: false,
})
const currentSongAtom=atom(null)
const currentNameAtom=atom(null)
const currentDirAtom=atom(null)
const currentViewsAtom=atom(null)
const currentImageAtom=atom(null)
export { sideNavBarState, playerState, currentSongAtom, currentNameAtom, currentDirAtom, currentViewsAtom, currentImageAtom}