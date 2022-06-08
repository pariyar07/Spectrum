import {FiTrendingUp} from "react-icons/fi";
import {MdUpdate} from "react-icons/md";

const UserFeedModal = ({showUserFeedModal}) => {
    return (<>
        {
            showUserFeedModal && <ul className="flex flex-col absolute top-4 right-4 bg-purple text-white text-base rounded-3xl overflow-hidden py-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                <li className="text-start pl-2">Sort by:</li>
                <li className="flex items-center justify-center transition-all cursor-pointer px-8 py-1 w-full text-lg font-semibold hover:bg-dark-purple"><FiTrendingUp/>&nbsp; Trending</li>
                <li className=" flex items-center justify-center transition-all cursor-pointer px-8 py-1 w-full text-lg font-semibold hover:bg-dark-purple"><MdUpdate/>&nbsp; Date</li>
            </ul>
        }
    </>)
}

export default UserFeedModal