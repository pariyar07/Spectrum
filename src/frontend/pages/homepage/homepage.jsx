import LeftNav from "frontend/components/leftNav.jsx";
import RightNav from "frontend/components/rightNav.jsx";
import { BsSortDownAlt, BsImageFill, BsFillEmojiSmileFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

const Homepage = () => {
    return (
        <>
            <LeftNav />
            <div className="w-full mx-4 border-grey border-x">
                <div className="flex items-center justify-between mx-6 mt-2 text-xl font-medium">
                    <p>Home</p>
                    <BsSortDownAlt className="cursor-pointer" title="sort posts" />
                </div>
                <div className="flex flex-col gap-2 w-full mt-4 px-6 py-2 border-b border-grey">
                    <div className="flex gap-2">
                        <img src="/assets/spectrum.png" alt="profile pic" className="w-11 h-11 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
                        <input type="text" className="w-full px-4 rounded-xl" placeholder="What's Happening?" />
                    </div>
                    <div className="flex justify-between items-center ml-14 text-xl">
                        <div className="flex gap-4">
                            <BsImageFill className="cursor-pointer" title="upload image" />
                            <AiOutlineGif className="cursor-pointer" title="upload gif" />
                            <BiPoll className="cursor-pointer" title="initiate poll" />
                            <BsFillEmojiSmileFill className="cursor-pointer" title="use emoji" />
                            <BsFillCalendarCheckFill className="cursor-pointer" title="schedule" />
                            <MdLocationOn className="cursor-pointer" title="update location" />
                        </div>
                        <button className="bg-purple py-2 rounded-xl px-6 text-white text-base font-medium hover:bg-dark-purple transition ease-out delay-100" title="post">Post</button>
                    </div>
                </div>
            </div>
            <RightNav />
        </>
    )
}

export default Homepage