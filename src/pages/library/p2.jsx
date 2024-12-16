import MCA2 from "./mca2"

function HP2() {
    
    return (
        <section className="overflow-x-hidden h-screen pl-16 w-full">
            <div>
                <div className="relative overflow-x-hidden ">
                    <div id="categories" className="py-6 px-12 inline-flex gap-6 w-full  text-white my-20 mb-2">
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
                                <MCA2 />
                        </div>
                    </section>
                </div>
            </div>
        </section>


    )
}


export default HP2