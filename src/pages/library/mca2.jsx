import { Bookmark, ListVideo } from "lucide-react"
function MCA2() {
    return (
        <div className="flex gap-4 ">
            <div className="min-w-28 max-w-40  rounded-md overflow-hidden">
            <div className="group relative w-full after:absolute hover:cursor-pointer after:content-[''] after:top-0 after:left-0 after:h-full after:w-full hover:after:bg-gradient-to-tr hover:after:from-transparent hover:after:via-transparent hover:after:to-black">
                <ListVideo className="w-full object-cover h-40"color="grey" strokeWidth={1} />


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
                    My Songs
                </h1>
                <div className="inline-flex flex-row gap-2 text-gray-400 items-center">
                    <span className=" text-sm hover:underline hover:cursor-pointer">
                        Playlist .
                        G.Tejavardhan Reddy
                    </span>
                </div>
            </div>

        </div>
        <div className="min-w-28 max-w-40  rounded-md overflow-hidden">
            <div className="group relative w-full after:absolute hover:cursor-pointer after:content-[''] after:top-0 after:left-0 after:h-full after:w-full hover:after:bg-gradient-to-tr hover:after:from-transparent hover:after:via-transparent hover:after:to-black">
                <Bookmark className="w-full bg-gradient-to-r from-yellow-200 to-sky-400 object-cover h-40" color="white" strokeWidth={1}  />
                

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
                    Episodes for Later
                </h1>
                <div className="inline-flex flex-row gap-2 text-gray-400 items-center">
                    <span className=" text-sm hover:underline hover:cursor-pointer">
                        Episodes you save for later 
                    </span>
                </div>
            </div>

        </div>
    </div>
        
    )
}


export default MCA2