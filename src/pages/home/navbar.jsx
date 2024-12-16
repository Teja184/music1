import { Menu } from "lucide-react"
import { useSetAtom } from "jotai"
import { sideNavBarState } from "../../store"


function NavBar() {
    const setNavState = useSetAtom(sideNavBarState)

    const toggleNavState = () => {
        setNavState(
            (prevState) => !prevState
        )
    }

    console.log("NavBar rendered");
    
    return (
        <nav className="fixed top-0 left-0 text-white p-6 flex items-center z-50 w-full">
                <div className="flex  gap-6 items-center w-full">
                    <Menu  onClick={toggleNavState}/>                    

                    <h1 className="text-2xl font-bold">
                        Music
                    </h1>

                    <div className="flex-grow pl-6">
                        <input type="text" className="h-full w-2/6 bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur-sm bg-opacity-10 backdrop-saturate-0 backdrop-contrast-75 focus:outline-none focus:border-transparent text-xl text-white p-2 rounded-lg"
                            placeholder="Search for music" />
                    </div>

                    <div className="w-28">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </div>


                </div>
            </nav>
    )
}

export default NavBar