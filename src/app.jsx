import NavBar from "./pages/home/navbar";
import HomePage from "./pages/home/page";
import MusicController from "./pages/home/musicController";
import SideNavBar from "./pages/home/sidenavbar";   
import { Outlet } from "react-router";


function App() {
    return (
        <>
            <NavBar />
            <main className="flex ">
            <SideNavBar />
            <Outlet />
        
            </main>
            <MusicController />

        </>
    )
}


export default App;