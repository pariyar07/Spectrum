import { AiOutlineRetweet, AiFillLike } from "react-icons/ai";
import { MdModeComment } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { HiBookmark } from "react-icons/hi";
import { Link } from "react-router-dom";
import { usePosts } from "frontend/context/postContext";
import useToast from "frontend/custom/useToast"

const BookmarkCard = ({ bookmark }) => {
    const { postsDispatch } = usePosts();
    const {showToast } = useToast();

    const unbookmarkHandler = () => {
        postsDispatch({ type: "UNBOOKMARK_POST", payload: bookmark });
        showToast("Removed from Bookmarks", "success")
    }

    return (<>
        <div className="w-full flex border-b border-grey px-4 py-4">
            <img src={bookmark.profileImage} alt="profile pic" className="rounded-full h-14 w-14 mr-3 cursor-pointer" title="profile pic" />
            <div className="w-full">
                <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                        <p className="font-semibold text-lg cursor-pointer" title="Username">{bookmark.username}</p>
                        <p className="text-dark-grey cursor-pointer" title="User Account">{bookmark.accountName}</p>
                        <span>·</span>
                        <span className="text-dark-grey text-sm">{bookmark.createdAt}</span>
                    </div>
                    <BsThreeDots className="cursor-pointer" title="more" />
                </div>
                <Link to={`/post/${bookmark._id}`}><p>{bookmark.content}</p></Link>
                {bookmark.image === "" ? "" : <img src={bookmark.image} alt="post img" className="rounded-xl h-max w-auto mt-2" />}
                <ul className="flex justify-between mt-4 text-xl">
                    <li className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey" title="like a post"><AiFillLike /><span className="text-sm text-dark-grey">{bookmark.likes.likeCount}</span></li>
                    <li className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey" title="scale this post"><AiOutlineRetweet /><span className="text-sm text-dark-grey">{bookmark.scale.scaleCount}</span></li>
                    <Link to={`/post/${bookmark._id}`}><li className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey" title="comment on this post"><MdModeComment /><span className="text-sm text-dark-grey">{bookmark.comments.length}</span></li></Link>
                    <li className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey" title="share post"><FaShare /><span className="text-sm text-dark-grey"></span></li>
                    <li className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey" title="unbookmark post" onClick={unbookmarkHandler}><HiBookmark className="text-purple"/><span className="text-sm text-dark-grey"></span></li>
                </ul>
            </div>
        </div>
    </>)
}

export default BookmarkCard