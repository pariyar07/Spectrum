import { AiOutlineRetweet, AiFillLike } from "react-icons/ai";
import { MdModeComment, MdTipsAndUpdates } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import {usePosts} from "frontend/context/postContext";

const SinglePost = () => {
    const {postsState: {posts}, receivedPost} = usePosts();

    return (<>
    {posts.map(post => {
                return <div key={post._id} className="flex border-b border-grey px-4 py-4">
                    <img src="assets/spectrum.png" alt="profile pic" className="rounded-full h-14 w-14 mr-3 cursor-pointer" title="profile pic" />
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
                            <li className="flex items-center gap-1 cursor-pointer" title="like a post"><AiFillLike /><span className="text-sm text-dark-grey">{post.likes.likeCount}</span></li>
                            <li className="flex items-center gap-1 cursor-pointer" title="scale this post"><AiOutlineRetweet /><span className="text-sm text-dark-grey">{post.scale.scaleCount}</span></li>
                            <li className="flex items-center gap-1 cursor-pointer" title="comment on this post"><MdModeComment /><span className="text-sm text-dark-grey">{post.comments.length}</span></li>
                            <li className="flex items-center gap-1 cursor-pointer" title="share post"><FaShare /><span className="text-sm text-dark-grey"></span></li>
                            <li className="flex items-center gap-1 cursor-pointer" title="tip user"><MdTipsAndUpdates /><span className="text-sm text-dark-grey"></span></li>
                        </ul>
                    </div>
                </div>
            }).reverse()
        }
        {receivedPost.map(post => {
                return <div key={post._id} className="flex border-b border-grey px-4 py-4">
                    <img src={post.profileImage} alt="profile pic" className="rounded-full h-14 w-14 mr-3 cursor-pointer" title="profile pic" />
                    <div className="w-full">
                        <div className="flex justify-between">
                            <div className="flex gap-1 items-center">
                                <p className="font-semibold text-lg cursor-pointer" title="Username">{post.username}</p>
                                <p className="text-dark-grey cursor-pointer" title="User Account">{post.accountName}</p>
                                <span>·</span>
                                <span className="text-dark-grey text-sm">{post.createdAt.slice(11, 16)}, {post.createdAt.slice(2, 10).split("-").join("/")}</span>
                            </div>
                            <BsThreeDots className="cursor-pointer" title="more" />
                        </div>
                        <p>{post.content}</p>
                        {post.image === "" ? "" : <img src={post.image} alt="post img" className="rounded-xl h-max w-auto mt-2" />}
                        <ul className="flex justify-between mt-4 text-xl">
                            <li className="flex items-center gap-1 cursor-pointer" title="like a post"><AiFillLike /><span className="text-sm text-dark-grey">{post.likes.likeCount}</span></li>
                            <li className="flex items-center gap-1 cursor-pointer" title="scale this post"><AiOutlineRetweet /><span className="text-sm text-dark-grey">{post.scale.scaleCount}</span></li>
                            <li className="flex items-center gap-1 cursor-pointer" title="comment on this post"><MdModeComment /><span className="text-sm text-dark-grey">{post.comments.length}</span></li>
                            <li className="flex items-center gap-1 cursor-pointer" title="share post"><FaShare /><span className="text-sm text-dark-grey"></span></li>
                            <li className="flex items-center gap-1 cursor-pointer" title="tip user"><MdTipsAndUpdates /><span className="text-sm text-dark-grey"></span></li>
                        </ul>
                    </div>
                </div>
            })
        }
        </>)
}

export default SinglePost