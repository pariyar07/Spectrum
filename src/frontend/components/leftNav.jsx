import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FiHash } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { CgMoreO, CgMore } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useAuth } from "frontend/context/authContext";
import useToast from 'frontend/custom/useToast';
import {useUser} from "frontend/context/userContext.jsx";

const LeftNav = () => {
    const [toggleLogoutButton, setToggleLogoutButton] = useState(false);
    const { setIsLoggedIn } = useAuth();
    const { showToast } = useToast();
    const {loggedUserData} = useUser();

    function navActive({ isActive }) {
        return {
            borderBottom: isActive ? "3px solid #A977FE" : "",
            padding: isActive ? "0.5rem 1.5rem" : "",
        }
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
        showToast("Successfully Logged out", "success");
    }

    return (
        <>
            <nav className="flex flex-col w-2/6 h-screen items-start pl-14 pr-10 py-10 justify-between">
                <div className="flex flex-col items-start min-w-full text-xl font-medium gap-4">
                    <img src="assets/spectrum.png" alt="logo" className="w-14 h-14 rounded-full mb-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer" />
                    <NavLink to="/" style={navActive} className="flex items-center gap-5 cursor-pointer w-full rounded-full"><AiFillHome /> Home</NavLink>
                    <div className="flex items-center gap-5 cursor-pointer w-full rounded-full" onClick={() => showToast("Coming Soon", 'warning')}><FiHash /> Explore</div>
                    <div className="flex items-center gap-5 cursor-pointer w-full rounded-full" onClick={() => showToast("Coming Soon", 'warning')}><IoMdNotifications /> Notifications</div>
                    <div className="flex items-center gap-5 cursor-pointer w-full rounded-full" onClick={() => showToast("Coming Soon", 'warning')}><BiMessageSquareDetail /> Messages</div>
                    <NavLink to="/bookmarks" style={navActive} className="flex items-center gap-5 cursor-pointer w-full rounded-full"><BsFillBookmarkFill /> Bookmarks</NavLink>
                    <div className="flex items-center gap-5 cursor-pointer w-full rounded-full" onClick={() => showToast("Coming Soon", 'warning')}><FaListAlt /> Lists</div>
                    <NavLink to="/profile" style={navActive} className="flex items-center gap-5 cursor-pointer w-full rounded-full"><MdAccountCircle /> Profile</NavLink>
                    <div className="flex items-center gap-5 cursor-pointer w-full rounded-full" onClick={() => showToast("Coming Soon", 'warning')}><CgMoreO /> More</div>
                    <button className="bg-purple w-fit py-2 px-12 m-auto rounded-full text-white text-lg font-semibold hover:bg-dark-purple transition ease-out delay-100" title="post">Post</button>
                </div>
                <div className="flex items-center gap-4 cursor-pointer px-2 py-2 rounded-full hover:bg-purple hover:text-white transition ease-out delay-100 relative">
                    <img src={loggedUserData.profileImage} alt="profile pic" className="w-11 h-11 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
                    <div className="text-sm">
                        <h3 className="font-medium">{loggedUserData.firstName} {loggedUserData.lastName}</h3>
                        <p>@{loggedUserData.firstName}</p>
                    </div>
                    <CgMore className="text-xl transition-transform hover:scale-125" title="more" onClick={() => setToggleLogoutButton(prev => !prev)} />
                    {toggleLogoutButton && <button className="absolute bottom-12 left-28 bg-purple text-lg font-semibold text-white py-2 px-12 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-all hover:bg-dark-purple" onClick={handleLogout}>Logout</button>}
                </div>
            </nav>
        </>
    )
}

export default LeftNav