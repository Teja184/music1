import { useAtomValue } from "jotai"
import { sideNavBarState } from "../../store"
import { Home, Compass, Music } from "lucide-react"
import { Link } from "react-router"

function SideNavBar() {
    const sideNavBar = useAtomValue(sideNavBarState)
    
    const openStyle = sideNavBar ? "w-56 bg-black" : "w-20 bg-transparent"

    const style = `sticky pt-24  top-0 bg-black h-full  ${openStyle} `
    
    return (
            <aside className="relative z-40">
                <div className={style}>
                    <div className="flex flex-col text-white px-6 gap-6">
                        <Link to={'home'} className={`${sideNavBar ? "flex-row gap-2" :  "flex-col gap-1"} inline-flex items-center `}>
                            <Home  />
                            <span className={`text-lg font-bold ${sideNavBar ? "blcok" : "hidden"}`}>
                                Home
                            </span>
                            <span className={`text-sm ${sideNavBar ? "hidden" : "blcok"}`}>
                                home
                            </span>
                        </Link>
                        <Link to={'explore'} className={`${sideNavBar ? "flex-row gap-2" :  "flex-col gap-1"} inline-flex items-center `}>
                            <Compass  />
                            <span className={`text-lg font-bold ${sideNavBar ? "blcok" : "hidden"}`}>
                                
                                    Explore
                                
                                
                            </span>
                            <span className={`text-sm ${sideNavBar ? "hidden" : "blcok"}`}>
                                Explore
                            </span>
                        </Link>
                        <Link to={'library'} className={`${sideNavBar ? "flex-row gap-2" :  "flex-col gap-1"} inline-flex items-center `}>
                            <Music  />
                            <span className={`text-lg font-bold ${sideNavBar ? "blcok" : "hidden"}`}>
                                Library
                            </span>
                            <span className={`text-sm ${sideNavBar ? "hidden" : "blcok"}`}>
                                Library
                            </span>
                        </Link>
                        
                </div>
                </div>
            </aside>
    )
}

export default SideNavBar