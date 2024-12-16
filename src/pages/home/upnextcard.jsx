import { PlayIcon } from "lucide-react"
function UpNextCard() {
    return (<>
        <div className="w-full h-20 relative flex items-center gap-6" >
            <div className="">
                <img src="https://i.ytimg.com/vi/soB58q2JwdA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGHIgPyg_MA8=&rs=AOn4CLCg0EcjCGJVr2zX9ut_uvgDDjpKLg" alt="music" className="w-20 h-20 object-contain" />
            </div>

            <div className="">

                <h1 className="text-white font-semibold ">
                    Archive Mix
                </h1>
                <div className="inline-flex text-gray-400 items-center">
                    <span className=" text-sm hover:underline hover:cursor-pointer">
                        AweLyrics
                    </span>
                </div>
            </div>
            <div className="text-gray-400 gap-4 items-center absolute right-0">
                <h1 >3:02</h1>
            </div>
            

        </div>


    </>)
}


export default UpNextCard