import { useState } from "react";
import { v4 as uuid } from "uuid";
import { AiOutlineRetweet, AiFillLike } from "react-icons/ai";
import { MdModeComment } from "react-icons/md";
import { HiBookmark } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { useUser } from "frontend/context/userContext.jsx";

const SinglePostDisplay = ({ _id, profileImage, username, accountName, createdAt, content, image, likes, scale, comments }) => {
    const post = { _id, profileImage, username, accountName, createdAt, content, image, likes, scale, comments };
    const { loggedUserData } = useUser();
    const [comment, setComment] = useState("");
    const [liveComments, setLiveComments] = useState([]);

    const liveCommentHandler = () => {
        const newComment = {
            _id: uuid(),
            username: loggedUserData.firstName,
            text: comment,
            likes: []
        }
        setLiveComments([...liveComments, newComment]);
        setComment("")
    }

    return (<>
        <div key={post._id} className="w-1/2 flex border-b border-grey px-4 py-4">
            <img src={profileImage} alt="profile pic" className="rounded-full h-14 w-14 mr-3 cursor-pointer" title="profile pic" />
            <div className="w-full">
                <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                        <p className="font-semibold text-lg cursor-pointer" title="Username">{post.username}</p>
                        <p className="text-dark-grey cursor-pointer" title="User Account">{post.accountName}</p>
                        <span>·</span>
                        <span className="text-dark-grey text-sm">{post.createdAt}</span>
                    </div>
                    <BsThreeDots className="cursor-pointer" title="more" />
                </div>
                <p>{post.content}</p>
                {post.image === "" ? "" : <img src={post.image} alt="post img" className="rounded-xl h-max w-auto mt-2" />}
                <ul className="flex justify-between mt-4 text-xl">
                    <li className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey" title="like a post"><AiFillLike /><span className="text-sm text-dark-grey">{post.likes.likeCount}</span></li>
                    <li className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey" title="scale this post"><AiOutlineRetweet /><span className="text-sm text-dark-grey">{post.scale.scaleCount}</span></li>
                    <li className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey" title="comment on this post"><MdModeComment /><span className="text-sm text-dark-grey">{post.comments.length}</span></li>
                    <li className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey" title="share post"><FaShare /><span className="text-sm text-dark-grey"></span></li>
                    <li className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey" title="bookmark post"><HiBookmark /><span className="text-sm text-dark-grey"></span></li>
                </ul>
            </div>
        </div>
        {/* comments section */}
        <div className="flex flex-col w-1/2">
            <div className="w-full flex items-end justify-around gap-4">
                <input type="text" placeholder="Write your comments here" className="border-2 border-grey mt-4 h-12 flex-grow px-6 rounded-full transition-all hover:border-dark-grey" value={comment} onChange={(e) => setComment(e.target.value)} />
                <button className="font-semibold border border-grey px-8 py-1 rounded-full transition-all hover:bg-dark-grey hover:text-white" onClick={liveCommentHandler}>Add Comment</button>
            </div>
            <p className="my-2 font-semibold">Comments</p>
            <div className="flex flex-col w-full gap-4">
                {liveComments.map(comment => {
                    return <div className="flex ml-10 pb-2 border-b border-grey flex-grow items-start" key={comment._id}>
                        <img src="https://picsum.photos/50/50" alt="profile pic" className="rounded-full w-10 h-10" />
                        <div>
                            <div className="flex flex-col ml-2 ">
                                <p className="font-semibold">{comment.username}</p>
                                <p>{comment.text}</p>
                            </div>
                            <div className="flex items-center gap-4 ml-4 mt-2">
                                <AiFillLike className="cursor-pointer transition-all hover:text-dark-grey" />
                                <p className="cursor-pointer transition-all hover:text-dark-grey">Reply</p>
                            </div>
                        </div>
                    </div>
                }).reverse()}
                {comments.map(comment => {
                    return <div className="flex ml-10 pb-2 border-b border-grey flex-grow items-start" key={comment._id}>
                        <img src="https://picsum.photos/50/50" alt="profile pic" className="rounded-full w-10 h-10" />
                        <div>
                            <div className="flex flex-col ml-2 ">
                                <p className="font-semibold">{comment.username}</p>
                                <p>{comment.text}</p>
                            </div>
                            <div className="flex items-center gap-4 ml-4 mt-2">
                                <AiFillLike className="cursor-pointer transition-all hover:text-dark-grey" />
                                <p className="cursor-pointer transition-all hover:text-dark-grey">Reply</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
    )
}

export default SinglePostDisplay