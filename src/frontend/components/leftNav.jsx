import { AiFillHome } from "react-icons/ai";
import { FiHash } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { CgMoreO, CgMore } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
    const navList = [
        {
            icon: <AiFillHome />,
            name: "Home",
            route: "/"
        }, {
            icon: <FiHash />,
            name: "Explore"
        }, {
            icon: <IoMdNotifications />,
            name: "Notifications"
        }, {
            icon: <BiMessageSquareDetail />,
            name: "Messages"
        }, {
            icon: <BsFillBookmarkFill />,
            name: "Bookmarks"
        }, {
            icon: <FaListAlt />,
            name: "Lists"
        }, {
            icon: <MdAccountCircle />,
            name: "Profile",
            route: "/profile"
        }, {
            icon: <CgMoreO />,
            name: "More"
        }
    ];

    return (
        <>
            <nav className="flex flex-col w-2/6 h-screen items-start pl-14 pr-10 py-10 justify-between">
                <ul className="flex flex-col items-start min-w-full text-xl font-medium gap-4">
                    <img src="assets/spectrum.png" alt="logo" className="w-14 h-14 rounded-full mb-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer" />
                    {navList.map(list => {
                        return <li className="flex items-center gap-5 cursor-pointer" key={Math.random() * 7 * Math.random()}>{list.icon}{list.name}</li>
                    })}
                    <button className="bg-purple min-w-full py-2 rounded-full text-white text-base font-medium hover:bg-dark-purple transition ease-out delay-100" title="post">Post</button>
                </ul>
                <div className="flex items-center gap-4 cursor-pointer px-2 py-2 rounded-full hover:bg-purple hover:text-white transition ease-out delay-100">
                    <img src="/assets/spectrum.png" alt="profile pic" className="w-11 h-11 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
                    <div className="text-sm">
                        <h3>Admin</h3>
                        <p>@spectrum_admin</p>
                    </div>
                    <CgMore className="text-xl transition-transform hover:scale-125" title="more" />
                </div>
            </nav>
        </>
    )
}

export default LeftNav