import { Music2, Podcast, Smile, TrendingUp } from "lucide-react"
import MusicVideoCard from "../home/musiccard"
import MusicAudioCard from "../home/musiccardaudio"
import Mood from "./mag"

function HP1() {
    return (
        <section className="overflow-x-hidden h-screen pl-16">
            <div>
                <div className="relative overflow-x-hidden ">
                    <div id="categories" className="py-6 px-12 inline-flex gap-6 text-white text-2xl font-bold my-20 mb-10">
                        <span className="flex gap-3 items-center bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-40 backdrop-saturate-100 backdrop-contrast-100 px-6 py-2 rounded">
                            <Music2 className="text-slate-300" strokeWidth={1} />
                            New Releases
                        </span>
                        <span className="flex gap-3 items-center bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-40 backdrop-saturate-100 backdrop-contrast-100 px-6 py-2 rounded">
                            <TrendingUp className="text-slate-300" strokeWidth={1}/>
                            Charts
                        </span>
                        <span className="flex gap-3 items-center bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-40 backdrop-saturate-100 backdrop-contrast-100 px-6 py-2 rounded">
                            <Smile className="text-slate-300" strokeWidth={1}/>
                            Moods & Geners
                        </span>
                        <span className="flex gap-3 items-center bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-40 backdrop-saturate-100 backdrop-contrast-100 px-6 py-2 rounded">
                            <Podcast className="text-slate-300" strokeWidth={1}/>
                            Podcasts
                        </span> 
                    </div>
                    <section className="py-6 px-12" >
                        <div >
                            <div className="mb-6">
                                <h1 className="text-white text-4xl font-semibold">
                                    New Albums & Singles
                                </h1>
                            </div>
                            <div>
                                <div className="flex gap-4 overflow-x-scroll">
                                    <MusicAudioCard/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-6 px-12" >
                        <div >
                            <div>
                                <h1 className="text-white text-4xl font-semibold">
                                    Moods & Geners
                                </h1>
                            </div>    
                            <div>
                                <div>
                                <Mood />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-6 px-12" >
                        <div >
                            <div className="mb-6">
                                <h1 className="text-white text-4xl font-semibold">
                                    New Music Videos 
                                </h1>
                            </div>
                            <div>
                                <div className="flex gap-4 overflow-x-scroll" >
                                    <MusicVideoCard/>
                                
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default HP1