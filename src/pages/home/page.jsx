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
                                    <MusicVideoCard songUrl = {"https://music.youtube.com/watch?v=pKwNDsBxXRA"} name={"Qaafirana"} dir={"Arijit Singh & Nikhita Gandhi"} views={"87M views"} image={"https://i.ytimg.com/vi/pKwNDsBxXRA/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3kUJhnvxXP5gUXvdrHGRh-2jatSyw"}/>
                                    <MusicVideoCard songUrl = {"https://music.youtube.com/watch?v=Fm-vIlWcdPE"} name={"DARLING JATT DI"} dir={"Amrinder Gill, Gurlez Akhtar & Dr Zeus"} views={"10M views"} image={"https://i.ytimg.com/vi/Fm-vIlWcdPE/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3mclZdyHOCMSE2vLzRikri2ePEh8A"}/>
                                    <MusicVideoCard songUrl = {"https://music.youtube.com/watch?v=Nr25SsJfZ8s"} name={"Talashi"} dir={"Street Boy, Mankirt Aulakh & Gurlez Akhtar"} views={"15M views"} image={"https://i.ytimg.com/vi/Nr25SsJfZ8s/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3loAe39VeaCIU2xB3yt5MLQNBDRyw"}/>
                                    <MusicVideoCard songUrl = {"https://music.youtube.com/watch?v=tpovqQ2EkA4"} name={"Gabru Gulab Warga"} dir={"Gurnam Bhullar"} views={"28M views"} image={"https://i.ytimg.com/vi/tpovqQ2EkA4/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3kDUYhMKicRebw9c8HXMWnmGBi5hA"}/>
                                    <MusicVideoCard songUrl = {"https://music.youtube.com/watch?v=uPl_jL9mCKc"} name={"Koka"} dir={"Mankirt Aulakh & Simar Kaur"} views={"190M views"} image={"https://i.ytimg.com/vi/uPl_jL9mCKc/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3l9xK4g7dwZUMzWvmV683wdTalETw"}/>
                                    <MusicVideoCard songUrl = {"https://music.youtube.com/watch?v=IhFKziOD72g"} name={"Khokhe"} dir={"Mankirt Aulakh & SIMAR KAUR  "} views={"37M views"} image={"https://i.ytimg.com/vi/IhFKziOD72g/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3k55Nhvz8hE8iNRAtHanWkr4Ttu_Q"}/>
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
                                    <MusicAudioCard songUrl = {"https://music.youtube.com/watch?v=uChhQpHMmXE&list=OLAK5uy_kKA7ACJrrQqYNZ9SLOyKmEPurGcRXm2TU"} name={"Aaye Haaye"} dir={"Single"} views={" Karan Aujla"} image={"https://lh3.googleusercontent.com/mTs-Ui8p2HE28egPEfqLL_wMLb3ZqacpnlLLeSCsWXnz4W7uzdA1MBkjY0npm-xcMnIDyU15GBsyDjs=w120-h120-l90-rj"}/>
                                    <MusicAudioCard songUrl = {"https://music.youtube.com/watch?v=UVcgoWClHck&list=OLAK5uy_lEJowpMizGWJPhU4oIsiflADng81rVHgQ"} name={"Sorry"} dir={"Single"} views={"Mankirt Aulakh"} image={"https://lh3.googleusercontent.com/5Dt-DtTL_TLW6uv4NeIMh4MD9s2v3tloOwqbLTL6SKsG1HnSTTMZWNYma64a2ntcs2bOqbA4cLxsD_ZO=w120-h120-l90-rj"}/>
                                    <MusicAudioCard songUrl = {"https://music.youtube.com/watch?v=7A9VHHzWV1g&list=OLAK5uy_lgHDS7Wc-mfm4XgC2DuPlXujMROZZ-q9A"} name={"Not Sure"} dir={"Single"} views={"Cheema Y & Gur Sidhu"} image={"https://lh3.googleusercontent.com/qwmmCBO0h61huFqRPJYK-u78cTER5iEN_BocbJNck6AqKswZljOkMqEfD3hoLZXKQGKqWiKMQRIGayM=w120-h120-l90-rj"}/>
                                    <MusicAudioCard songUrl = {"https://music.youtube.com/watch?v=tpovqQ2EkA4"} name={"Gabru Gulab Warga"} dir={"Gurnam Bhullar"} views={"28M views"} image={"https://i.ytimg.com/vi/tpovqQ2EkA4/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3kDUYhMKicRebw9c8HXMWnmGBi5hA"}/>
                                    <MusicAudioCard songUrl = {"https://music.youtube.com/watch?v=QcND7dhD454&list=OLAK5uy_kQgpKvKXxi9F2_Pa5owy7ja79Bj0xk4dg"} name={"Rangeen"} dir={"Single"} views={" Gurnam Bhullar"} image={"https://lh3.googleusercontent.com/XyEvdStmOmJ5W17jJol62q7MMN4yzZf8AYToJ_tgXp_R2oLk__i2ofEy8uXNM5u9YCQciFFaUZNM5B3H=w120-h120-l90-rj"}/>
                                    <MusicAudioCard songUrl = {"https://music.youtube.com/watch?v=XPKry_UABq8&list=OLAK5uy_nnQYX6OFhA-7mad_XmsytPs8uiksfuU7g"} name={"Hood Luv"} dir={"Single"} views={"Inder Chahal, Gurlez Akhtar & Amber"} image={"https://lh3.googleusercontent.com/fndAKpQHvqzMOMLi6Xv9MYuXRv7s-dAnr7i3J5Ylih32y2V6x9mCjqT-lBcJzFznKXneBItrw18I7YhwYQ=w120-h120-l90-rj"}/>
                                    <MusicAudioCard songUrl = {"https://music.youtube.com/watch?v=pKwNDsBxXRA"} name={"Dior"} dir={"Single"} views={"Pranjal Dahiya"} image={"https://lh3.googleusercontent.com/KPquCjCIKnAlgKHvY2P1Jc9MnzHRpyNwUsz55HhO-i-lIsk4NSYyQliYlS_FCXasyQ2C2xXDa7RHAjs=w120-h120-l90-rj"}/>
                                    <MusicAudioCard songUrl = {"https://music.youtube.com/watch?v=-97G7C5_Y4A&list=OLAK5uy_l4ZTSg_rOZzCRyt19q1WDvogUd8yAghY4"} name={"Experimento"} dir={"Album"} views={"Saabi Bhinder"} image={"https://lh3.googleusercontent.com/7qMMDOE1bl7yPIv3KACLuF7Al7TWNalgG0_y1K6EF6XHdHxAcC_D66pRb4Zer9aJ9hnC-l0-xUDu6Z6heQ=w120-h120-l90-rj"}/>
                                    <MusicAudioCard songUrl = {"https://music.youtube.com/watch?v=lPs5RkyGNfk&list=OLAK5uy_mvd5gIFtflZD2pEAj0uVMYjMJoUU-ZuW8"} name={"Befikre"} dir={"EP"} views={"Luv Athwal & Simar Kaur"} image={"https://lh3.googleusercontent.com/At1LbWQ6xyylFNziUWGJXQhnB8VOiiS3g1FouxyJB3sVVDDnPKOU5QWFEfUic3PvzJR2FjY8cNsyUe4HfQ=w120-h120-l90-rj"}/>
                                    
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
                                    <MusicAudioCard songUrl = {"https://music.youtube.com/watch?v=50VNCymT-Cs"} name={"Archive Mix"} dir={"AweLyrics"} views={"1.2M views"} image={"https://i.ytimg.com/vi/soB58q2JwdA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGHIgPyg_MA8=&rs=AOn4CLCg0EcjCGJVr2zX9ut_uvgDDjpKLg"} />
                                    <MusicAudioCard songUrl = {"https://music.]]youtube.com/watch?v=XDjB9E3YtUE"} name={"Archive Mix"} dir={"AweLyrics"} views={"1.2M views"} image={"https://i.ytimg.com/vi/soB58q2JwdA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGHIgPyg_MA8=&rs=AOn4CLCg0EcjCGJVr2zX9ut_uvgDDjpKLg"}/>
                                    <MusicAudioCard songUrl = {"https://youtube.com/watch?v=5DF9aRuiOZo"} name={"Archive Mix"} dir={"AweLyrics"} views={"1.2M views"} image={"https://i.ytimg.com/vi/soB58q2JwdA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGHIgPyg_MA8=&rs=AOn4CLCg0EcjCGJVr2zX9ut_uvgDDjpKLg"}/>
                                    <MusicAudioCard songUrl = {"https://youtube.com/watch?v=snx5qGUtVi8"} name={"Archive Mix"} dir={"AweLyrics"} views={"1.2M views"} image={"https://i.ytimg.com/vi/soB58q2JwdA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGHIgPyg_MA8=&rs=AOn4CLCg0EcjCGJVr2zX9ut_uvgDDjpKLg"}/>
                                    
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
                                <MusicAudioCard songUrl = {"https://music.youtube.com/watch?v=50VNCymT-Cs"} name={"Archive Mix"} dir={"AweLyrics"} views={"1.2M views"} image={"https://i.ytimg.com/vi/soB58q2JwdA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGHIgPyg_MA8=&rs=AOn4CLCg0EcjCGJVr2zX9ut_uvgDDjpKLg"} />
                                    <MusicAudioCard songUrl = {"https://music.]]youtube.com/watch?v=XDjB9E3YtUE"} name={"Archive Mix"} dir={"AweLyrics"} views={"1.2M views"} image={"https://i.ytimg.com/vi/soB58q2JwdA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGHIgPyg_MA8=&rs=AOn4CLCg0EcjCGJVr2zX9ut_uvgDDjpKLg"}/>
                                    <MusicAudioCard songUrl = {"https://youtube.com/watch?v=5DF9aRuiOZo"} name={"Archive Mix"} dir={"AweLyrics"} views={"1.2M views"} image={"https://i.ytimg.com/vi/soB58q2JwdA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGHIgPyg_MA8=&rs=AOn4CLCg0EcjCGJVr2zX9ut_uvgDDjpKLg"}/>
                                    <MusicAudioCard songUrl = {"https://youtube.com/watch?v=snx5qGUtVi8"} name={"Archive Mix"} dir={"AweLyrics"} views={"1.2M views"} image={"https://i.ytimg.com/vi/soB58q2JwdA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGHIgPyg_MA8=&rs=AOn4CLCg0EcjCGJVr2zX9ut_uvgDDjpKLg"}/>
                                    
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