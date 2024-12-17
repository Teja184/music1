import { currentSongAtom, currentDirAtom, currentImageAtom, currentViewsAtom, currentNameAtom } from "../../store"
import { useSetAtom } from "jotai"
import {Audiolist} from "../../data"

function MusicAudioCard() {
    const updateSong = useSetAtom(currentSongAtom)
    const updateName = useSetAtom(currentNameAtom)
    const updateDir = useSetAtom(currentDirAtom)
    const updateViews = useSetAtom(currentViewsAtom)
    const updateImage = useSetAtom(currentImageAtom)
    const updatePlayingSong = (aud) => {
        console.log(aud.songUrl);
        updateSong(aud.songUrl)
        updateName(aud.name)
        updateDir(aud.dir)
        updateViews(aud.views)
        updateImage(aud.image)
    }
    return (
        <>
            {
                Audiolist.map((aud, index) => {
                    return (
                        <div key={index} className="min-w-36 max-w-40  rounded-md overflow-hidden">
                            <div className="group relative w-full after:absolute hover:cursor-pointer after:content-[''] after:top-0 after:left-0 after:h-full after:w-full hover:after:bg-gradient-to-tr hover:after:from-transparent hover:after:via-transparent hover:after:to-black" onClick={()=>updatePlayingSong(aud)}>
                                <img src={aud.image} alt="music" className="w-full  object-cover h-40" />
                                <div className="absolute top-0 right-0  hover:bg-gray-200/30 rounded-full z-10 p-1 m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 stroke-white group-hover:block hidden">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                    </svg>
                                </div>
                                <div className="bg-black/95 px-2 py-2 m-2 absolute bottom-0 right-0 z-10 rounded-full hidden group-hover:block hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 fill-white  stroke-none">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="py-2">
                                <h1 className="text-white text-lg font-semibold">
                                    {aud.name}
                                </h1>
                                <div className="inline-flex gap-2 text-gray-400 items-center">
                                    <span className=" text-sm hover:underline hover:cursor-pointer">
                                        {aud.dir}
                                    </span>
                                    <span>
                                        •
                                    </span>
                                    <span className=" text-sm">
                                        {aud.views}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default MusicAudioCard