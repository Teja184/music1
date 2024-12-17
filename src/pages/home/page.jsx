import MusicAudioCard from "./musiccardaudio"
import MusicVideoCard from "./musiccard"
import { useEffect, useState } from "react"

function HomePage() {

    return (


        <section className="overflow-x-hidden h-screen pl-16 w-full">
            <div>
                <div className="relative overflow-x-hidden ">
                    <div id="categories" className="py-6 px-12 inline-flex gap-6 text-white my-20">
                        <span className="bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 px-2 py-1 rounded-lg">
                            podcast
                        </span>
                        <span className="bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 px-2 py-1 rounded-lg">
                            romance
                        </span>
                        <span className="bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 px-2 py-1 rounded-lg">
                            relax
                        </span>
                        <span className="bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 px-2 py-1 rounded-lg">
                            feel-good
                        </span>
                        <span className="bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 px-2 py-1 rounded-lg">
                            party
                        </span>


                    </div>

                    <section className="py-6 px-12" >
                        <div >
                            <div className="mb-6">

                                <h1 className="text-white text-4xl font-semibold mb-6">
                                    Music Videos for You
                                </h1>
                                <div className="flex gap-4 overflow-x-scroll">
                                    <MusicVideoCard/>
                                    
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-6 px-12" >
                        <div >
                            <div className="mb-6">
                                <h1 className="text-white text-4xl font-semibold">
                                New Releases
                                </h1>
                            </div>

                            <div>
                                <div className="flex gap-5 overflow-x-scroll">
                                    <MusicAudioCard/>
                                
                                    
                                </div>
                            </div>

                        </div>
                    </section>
                    <section className="py-6 px-12" >
                        <div >
                            <div className="mb-6">
                                <h1 className="text-white text-4xl font-semibold">
                                    Albums for You
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
                            <div className="mb-6">
                                <h1 className="text-white text-4xl font-semibold">
                                    Forgotten 90s
                                </h1>
                            </div>

                            <div>
                                <div className="flex gap-4 overflow-x-scroll">
                                <MusicAudioCard />
                                    
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}


export default HomePage