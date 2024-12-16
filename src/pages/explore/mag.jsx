import { ChevronRight, ChevronLeft } from "lucide-react"
import { useRef } from "react"
function Mood(){

    const urlRef = useRef()
    
    const nextScroll = () => {
        // console.log(urlRef);
        if (urlRef.current) {
            console.log("next",urlRef.current.offsetWidth * 1 );
            
            urlRef.current.scrollBy({
                left: urlRef.current.clientWidth * 1 - 90,
                behavior: "smooth"
            })
        }
    }

    const prevScroll = () => {
        if (urlRef.current) {
            console.log("next",urlRef.current.offsetWidth * 1 );
            
            urlRef.current.scrollBy({
                left: -1 * urlRef.current.clientWidth * 1 - 90,
                behavior: "smooth"
            })
        }   
    }


    return(
        <section className="overflow-x-hidden w-full pr-5 text-white">
            
            <div className="flex justify-end w-full gap-5">
                <ChevronLeft onClick={prevScroll}/>
                <ChevronRight onClick={nextScroll}/>
            </div>
            <div>
                <ul ref={urlRef} className="grid grid-cols-[repeat(12,180px)] py-6 gap-x-7 gap-y-7 overflow-x-scroll overflow-hidden">

                    <li className=" border-l-8 rounded-md border-yellow-200  border p-4">
                        Chill 
                    </li>
                    <li className=" border-l-8 rounded-md border-violet-200  border p-4">
                        Focus
                    </li>
                    <li className=" border-l-8 rounded-md border-violet-300  border p-4">
                        Sleep
                    </li>
                    <li className=" border-l-8 rounded-md border-violet-400  border p-4">
                        Bengali
                    </li>
                    <li className=" border-l-8 rounded-md border-violet-500  border p-4">
                        Americana
                    </li>
                    <li className=" border-l-8 rounded-md border-violet-600  border p-4">
                        Family
                    </li>
                    <li className=" border-l-8 rounded-md border-violet-700  border p-4">
                        Haryanvi
                    </li>
                    <li className=" border-l-8 rounded-md border-violet-800  border p-4">
                        Indian Indie
                    </li>
                    <li className=" border-l-8 rounded-md border-violet-900  border p-4">
                        Jazz
                    </li>
                    <li className=" border-l-8 rounded-md border-yellow-300  border p-4">
                        Malayalam
                    </li>
                    <li className=" border-l-8 rounded-md border-red-200  border p-4">
                        Pop
                    </li>
                    <li className=" border-l-8 rounded-md border-red-300  border p-4">
                        Rock
                    </li>
                    <li className=" border-l-8 rounded-md border-red-400  border p-4">
                        Commute
                    </li>
                    <li className=" border-l-8 rounded-md border-red-500  border p-4">
                        Party
                    </li>
                    <li className=" border-l-8 rounded-md border-red-600  border p-4">
                        Workout
                    </li>
                    <li className=" border-l-8 rounded-md border-red-700  border p-4">
                        Bhojpuri
                    </li>
                    <li className=" border-l-8 rounded-md border-red-800  border p-4">
                        Dance & Electronic
                    </li>
                    <li className=" border-l-8 rounded-md border-red-900  border p-4">
                        Folk & Acoustic
                    </li>
                    <li className=" border-l-8 rounded-md border-yellow-400  border p-4">
                        Hindi
                    </li>
                    <li className=" border-l-8 rounded-md border-blue-200  border p-4">
                        Indian Pop
                    </li>
                    <li className=" border-l-8 rounded-md border-blue-300  border p-4">
                        K-pop
                    </li>
                    <li className=" border-l-8 rounded-md border-blue-400  border p-4">
                        Marathi
                    </li>
                    <li className=" border-l-8 rounded-md border-blue-500  border p-4">
                        Punjabi
                    </li>
                    <li className=" border-l-8 rounded-md border-blue-600  border p-4">
                        Tamil
                    </li>
                    <li className=" border-l-8 rounded-md border-blue-700  border p-4">
                        Energy Boosters
                    </li>
                    <li className=" border-l-8 rounded-md border-blue-800  border p-4">
                        Romance
                    </li>
                    <li className=" border-l-8 rounded-md border-blue-900  border p-4">
                        African
                    </li>

                    <li className=" border-l-8 rounded-md border-yellow-900  border p-4">
                        Carnatic Classical
                    </li>
                    <li className=" border-l-8 rounded-md border-green-200  border p-4">
                        Decades
                    </li>
                    <li className=" border-l-8 rounded-md border-green-300  border p-4">
                        Ghazal/Sufi
                    </li>
                    <li className=" border-l-8 rounded-md border-green-400  border p-4">
                        Hindustani Classical
                    </li>
                    <li className=" border-l-8 rounded-md border-green-500  border p-4">
                        Indie & Alternative
                    </li>
                    <li className=" border-l-8 rounded-md border-green-600  border p-4">
                        Kannada
                    </li>
                    <li className=" border-l-8 rounded-md border-green-700  border p-4">
                        Metal
                    </li>
                    <li className=" border-l-8 rounded-md border-green-800  border p-4">
                        R&B & Soul
                    </li>
                    <li className=" border-l-8 rounded-md border-green-900  border p-4">
                        Telugu
                    </li>
                    <li className=" border-l-8 rounded-md border-yellow-500  border p-4">
                        Feel Good
                    </li>
                    <li className=" border-l-8 rounded-md border-yellow-600  border p-4">
                        Sad
                    </li>
                    <li className=" border-l-8 rounded-md border-yellow-700  border p-4">
                        Arabic
                    </li>
                    <li className=" border-l-8 rounded-md border-yellow-800  border p-4">
                        Classical
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Mood