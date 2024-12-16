import { currentSongAtom, currentDirAtom, currentImageAtom, currentViewsAtom, currentNameAtom  } from "../../store"
import { useSetAtom } from "jotai"

function MC1(params) {
    const songUrl = params.songUrl 
    const name = params.name
    const dir = params.dir
    const views = params.views
    const image = params.image
    const updateSong = useSetAtom(currentSongAtom)
    const updateName = useSetAtom(currentNameAtom)
    const updateDir = useSetAtom(currentDirAtom)
    const updateViews = useSetAtom(currentViewsAtom)
    const updateImage = useSetAtom(currentImageAtom)

    const updatePlayingSong = () => {
        console.log(songUrl);
        
        updateSong(songUrl)
        updateName(name)
        updateDir(dir)
        updateViews(views)
        updateImage(image)
    }
    return (
        <div className="min-w-80">
            <div className="group relative w-full after:absolute hover:cursor-pointer after:content-[''] after:top-0 after:left-0 after:h-full after:w-full hover:after:bg-black/40 "onClick={updatePlayingSong}>
                <img src={image} alt="music" className="w-full  object-contain" />



                <div className="absolute top-0 right-0  hover:bg-gray-200/30 rounded-full z-10 p-1 m-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 stroke-white group-hover:block hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
                </div>





                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-11 fill-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 stroke-transparent z-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>


            </div>

            <div className="py-2">

                <h1 className="text-white text-lg font-semibold">
                    {name}
                </h1>
                <div className="inline-flex gap-2 text-gray-400 items-center">
                    <span className=" text-sm hover:underline hover:cursor-pointer">
                        {dir}
                    </span>
                    <span>
                        •
                    </span>
                    <span className=" text-sm">
                        {views}
                    </span>
                </div>
            </div>

        </div>


    )
}


export default MC1