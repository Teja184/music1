import { SkipForward, SkipBack, Play, Pause, Volume, VolumeOff, Repeat, Shuffle, ThumbsUp, ThumbsDown, EllipsisVertical, ChevronLeft, ChevronUp, ListPlus } from "lucide-react";
import BottomModal from "../../components/bottom_model";
import { useEffect, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ReactPlayer from "react-player";
import { useRef } from "react";
import { useAtomValue } from "jotai";
import { currentSongAtom, currentDirAtom, currentImageAtom, currentNameAtom, currentViewsAtom } from "../../store";

//  a component to hold sound and repeat buttons
function SoundRepeatButtons(props) {
    // props is an object that holds all the props passed to the component
    // props -> {className: "group-hover:flex hidden gap-2 items-center"}
    return (
        <div
            className={props.className}
        >
            <Volume />
            <Repeat />
        </div>
    )
}


function MusicController() {
    const [isOpen, setIsOpen] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [duration, setDuration] = useState(0); // Track video duration
    const [seek, setSeek] = useState(0)
    const playerRef = useRef(null)
    const [volume, setVolume] = useState(0.5)
    const [muted, setMuted] = useState(false)
    const songUrl = useAtomValue(currentSongAtom)
    const name = useAtomValue(currentNameAtom)
    const dir = useAtomValue(currentDirAtom)
    const views = useAtomValue(currentViewsAtom)
    const image = useAtomValue(currentImageAtom)

    useEffect(()=>{
        console.log("song url change", songUrl);
        
        // rest duration playing, seek
        setSeek(0)
        setDuration(0)
        setPlaying(true)
    }, [songUrl])


    const togglePlayPause = (event) => {
        event.stopPropagation();
        setPlaying(!playing)
    }

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    const handleProgress = (state) => {
        if (playing) {
            setSeek(state.played);
        }
    };

    const handlePlay = () => {
        setPlaying(true)
    }

    const handleSeekChange = (e) => {
        console.log(e.target.value);
        const value = parseFloat(e.target.value)
        setSeek(value);
        playerRef.current.seekTo(value);
    };


    const updateMuted = (event) => {
        event.stopPropagation()
        console.log("update muted", event);

        // event.stopPropagation()
        if (muted) {
            setVolume(0.5)
        } else {
            setVolume(0)
        }

        setMuted(!muted)
    }

    const handlePause = () => {
        setPlaying(false)
    }

    const handleDuration = (duration) => {
        setDuration(duration);
    };

    const updateVolume = (event) => {
        event.stopPropagation()
        const value = parseFloat(event.target.value)

        setVolume(value)
    }

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    if (!songUrl) {
        return (<></>)
    }

    return (<>

        <BottomModal isOpen={isOpen}
            className="pl-32 pt-28 pr-20 overflow-auto"
        >
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-10 ">

                <div className=" w-full">
                    <ReactPlayer
                        onProgress={handleProgress}
                        width="100%"
                        ref={playerRef}
                        playing={playing}
                        onDuration={handleDuration}
                        volume={volume}
                        muted={muted}
                        onPlay={handlePlay}
                        onPause={handlePause}
                        url={songUrl} />

                </div>
                <div className="">
                    <TabGroup defaultIndex={0}  >
                        <TabList className="  flex gap-7">
                            <Tab className="fonts-semibold border-b-2 outline-none border-transparent hover:text-slate-300 data-[selected]:border-slate-300">UP NEXT</Tab>
                            <Tab className="fonts-semibold border-b-2 outline-none border-transparent hover:text-slate-300 data-[selected]:border-slate-300">LYRICS</Tab>
                            <Tab className="fonts-semibold border-b-2 outline-none border-transparent hover:text-slate-300 data-[selected]:border-slate-300">RELATED</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <div className="py-3">
                                    <div className="flex items-center justify-between gap-5">
                                        <div>
                                            <span className="text-slate-300 text-sm">
                                                Playing from
                                            </span>
                                            <p>
                                                Zenitsu Plays The Shamisen but uses Phonkbreathi
                                            </p>
                                        </div>

                                        <div className="flex bg-white px-4 py-2 text-black rounded-full">
                                            <ListPlus />
                                            <span className="font-semibold">Save</span>
                                        </div>
                                    </div>

                                    <div className="pt-3">
                                        <div className="flex items-center gap-5 p-3 bg-slate-600 border-b-2 border-slate-300 border-slate-300/30">
                                            <div className="relative">
                                                <img src="https://i.ytimg.com/vi/a3NsCITgUmY/maxresdefault.jpg" alt="let me go"
                                                    className="size-10 rounded-sm"
                                                />
                                                <div className="absolute h-full w-full bg-slate-900/90 flex justify-center items-center top-0 left-0">
                                                    <Play size={23} />
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <h1 className="font-bold line-clamp-1">Let me go let me go let me go let me go let me go let me golet me go let me gos</h1>
                                                <span>
                                                    Shakthikanth Karthick, Sindhuri and Sinov Raj
                                                </span>
                                            </div>
                                            <span>
                                                3:00
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-5 p-3 bg-slate-600 border-b-2 border-slate-300 border-slate-300/30">
                                            <div className="relative">
                                                <img src="https://i.ytimg.com/vi/a3NsCITgUmY/maxresdefault.jpg" alt="let me go"
                                                    className="size-10 rounded-sm"
                                                />
                                                <div className="absolute h-full w-full bg-slate-900/90 flex justify-center items-center top-0 left-0">
                                                    <Play size={23} />
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <h1 className="font-bold line-clamp-1">Let me go let me go let me go let me go let me go let me golet me go let me gos</h1>
                                                <span>
                                                    Shakthikanth Karthick, Sindhuri and Sinov Raj
                                                </span>
                                            </div>
                                            <span>
                                                3:00
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-5 p-3 bg-slate-600 border-b-2 border-slate-300 border-slate-300/30">
                                            <div className="relative">
                                                <img src="https://i.ytimg.com/vi/a3NsCITgUmY/maxresdefault.jpg" alt="let me go"
                                                    className="size-10 rounded-sm"
                                                />
                                                <div className="absolute h-full w-full bg-slate-900/90 flex justify-center items-center top-0 left-0">
                                                    <Play size={23} />
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <h1 className="font-bold line-clamp-1">Let me go let me go let me go let me go let me go let me golet me go let me gos</h1>
                                                <span>
                                                    Shakthikanth Karthick, Sindhuri and Sinov Raj
                                                </span>
                                            </div>
                                            <span>
                                                3:00
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-5 p-3 bg-slate-600 border-b-2 border-slate-300 border-slate-300/30">
                                            <div className="relative">
                                                <img src="https://i.ytimg.com/vi/a3NsCITgUmY/maxresdefault.jpg" alt="let me go"
                                                    className="size-10 rounded-sm"
                                                />
                                                <div className="absolute h-full w-full bg-slate-900/90 flex justify-center items-center top-0 left-0">
                                                    <Play size={23} />
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <h1 className="font-bold line-clamp-1">Let me go let me go let me go let me go let me go let me golet me go let me gos</h1>
                                                <span>
                                                    Shakthikanth Karthick, Sindhuri and Sinov Raj
                                                </span>
                                            </div>
                                            <span>
                                                3:00
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-5 p-3 bg-slate-600 border-b-2 border-slate-300 border-slate-300/30">
                                            <div className="relative">
                                                <img src="https://i.ytimg.com/vi/a3NsCITgUmY/maxresdefault.jpg" alt="let me go"
                                                    className="size-10 rounded-sm"
                                                />
                                                <div className="absolute h-full w-full bg-slate-900/90 flex justify-center items-center top-0 left-0">
                                                    <Play size={23} />
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <h1 className="font-bold line-clamp-1">Let me go let me go let me go let me go let me go let me golet me go let me gos</h1>
                                                <span>
                                                    Shakthikanth Karthick, Sindhuri and Sinov Raj
                                                </span>
                                            </div>
                                            <span>
                                                3:00
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-5 p-3 bg-slate-600 border-b-2 border-slate-300 border-slate-300/30">
                                            <div className="relative">
                                                <img src="https://i.ytimg.com/vi/a3NsCITgUmY/maxresdefault.jpg" alt="let me go"
                                                    className="size-10 rounded-sm"
                                                />
                                                <div className="absolute h-full w-full bg-slate-900/90 flex justify-center items-center top-0 left-0">
                                                    <Play size={23} />
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <h1 className="font-bold line-clamp-1">Let me go let me go let me go let me go let me go let me golet me go let me gos</h1>
                                                <span>
                                                    Shakthikanth Karthick, Sindhuri and Sinov Raj
                                                </span>
                                            </div>
                                            <span>
                                                3:00
                                            </span>
                                        </div>
                                    </div>
                                </div>


                            </TabPanel>

                            <TabPanel>
                                <div className="whitespace-pre-line text-md font-thin">
                                    {`Lorem ipsum dolor 
                            sit amet 
                            consectetur 
                            adipisicing elit. 
                            Dignissimos, veniam ad! Autem`}
                                </div>

                            </TabPanel>
                            <TabPanel>

                            </TabPanel>
                        </TabPanels>
                    </TabGroup>

                </div>
            </div>
        </BottomModal>

        <div className="fixed bottom-0 left-0 w-full h-[80px] bg-slate-800 z-50 text-white" >
            <div className="relative -top-2">
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    onChange={handleSeekChange}
                    value={seek}

                    className="range range-xs range-error bg-blue-200"
                />
            </div>
            <div onClick={toggleModal}>
                <div className="flex h-full items-center justify-between px-6">

                    <div id="controls" className="flex gap-2">
                        <div className="flex gap-4 items-center justify-center">
                            <SkipBack />
                            {
                                playing ? <Pause onClick={togglePlayPause} /> :
                                    <Play onClick={togglePlayPause} />
                            }
                            <SkipForward />
                        </div>

                        {/* track timer */}

                        <div className="lg:block hidden">
                            <span>00:00</span>
                            <span> / </span>
                            <span>00:00</span>
                        </div>

                    </div>

                    <div id="song-content" className="flex gap-4">
                        <img src={image} alt="let me go"
                            className="size-12 rounded-sm lg:block hidden"
                        />
                        <div>
                            <h1 className="font-bold"
                            >{name}</h1>
                            <div className="flex gap-2">
                                <span>
                                    {dir}
                                </span>
                                <span>
                                    .
                                </span>
                                <span>
                                    {views}
                                </span>
                            </div>
                            
                        </div>

                        <div className="gap-2 items-center lg:flex hidden">
                            <div className="hover:bg-slate-300/30 p-3 rounded-full">
                                <ThumbsUp className="" />
                            </div>
                            <div className="hover:bg-slate-300/30 p-3 rounded-full">
                                <ThumbsDown />
                            </div>
                            <div className="hover:bg-slate-300/30 p-3 rounded-full">
                                <EllipsisVertical />
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="flex gap-4">
                            <div className="group lg:hidden flex ">
                                <SoundRepeatButtons
                                    className="group-hover:flex hidden gap-2 items-center"
                                />
                                <ChevronLeft className="group-hover:hidden" />
                            </div>

                            <div className="lg:flex  hidden gap-2 items-center group">
                                <div className="flex gap-2">
                                    <input type="range" min="0" max="1" step={0.1} value={volume} className="range range-primary bg-slate-300"
                                        onChange={updateVolume}
                                        onClick={(evt) => evt.stopPropagation()}
                                    />
                                    {
                                        muted ? <VolumeOff onClick={updateMuted} /> : <Volume onClick={updateMuted} />
                                    }
                                </div>
                                <Shuffle />
                                <Repeat />
                            </div>
                            <ChevronUp
                                className={
                                    isOpen ? "transition-transform duration-300" : "transform rotate-180 transition-transform duration-300"
                                }

                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>)
}

export default MusicController