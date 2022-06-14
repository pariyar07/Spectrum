import {useState} from "react";
import { AiOutlineRetweet, AiFillLike } from "react-icons/ai";
import { MdModeComment } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { HiBookmark } from "react-icons/hi";
import { Link } from "react-router-dom";
import { usePosts } from "frontend/context/postContext";
import useToast from "frontend/custom/useToast";
import { useUser } from "frontend/context/userContext";
import ProfileModal from "frontend/components/profileModal";

const PostCard = ({ post }) => {
  const { postsDispatch } = usePosts();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [postBookmarked, setPostBookmarked] = useState(false);
  const { loggedUserData } = useUser();
  const { showToast } = useToast();

  const bookmarkHandler = () => {
    postsDispatch({ type: "BOOKMARK_POST", payload: post });
    showToast("Post Bookmarked", "success");
    setPostBookmarked(true);
  };

  const unbookmarkHandler = () => {
    postsDispatch({ type: "UNBOOKMARK_POST", payload: post });
    showToast("Removed from Bookmarks", "success");
    setPostBookmarked(false);
}

  return (
    <div className="w-full flex">
      <img
        src={loggedUserData.profileImage}
        alt="profile pic"
        className="rounded-full h-14 w-14 mr-3 cursor-pointer"
        title="profile pic"
      />
      <div className="w-full">
        <div className="flex justify-between relative">
          <div className="flex gap-1 items-center">
            <p
              className="font-semibold text-lg cursor-pointer"
              title="Username"
            >
              {post.username}
            </p>
            <p className="text-dark-grey cursor-pointer" title="User Account">
              {post.accountName}
            </p>
            <span>·</span>
            <span className="text-dark-grey text-sm">{post.createdAt}</span>
          </div>
          <BsThreeDots
            className="cursor-pointer"
            title="more"
            onClick={() => 
            setShowProfileModal(active => !active)}
          />
          {showProfileModal && <ProfileModal/>}
        </div>
        <Link to={`/post/${post._id}`}>
          <p>{post.content}</p>
        </Link>
        {post.image === "" ? (
          ""
        ) : (
          <img
            src={post.image}
            alt="post img"
            className="rounded-xl h-max w-auto mt-2"
          />
        )}
        <ul className="flex justify-between mt-4 text-xl">
          <li
            className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey"
            title="like a post"
          >
            <AiFillLike />
            <span className="text-sm text-dark-grey">
              {post.likes.likeCount}
            </span>
          </li>
          <li
            className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey"
            title="scale this post"
          >
            <AiOutlineRetweet />
            <span className="text-sm text-dark-grey">
              {post.scale.scaleCount}
            </span>
          </li>
          <Link to={`/post/${post._id}`}>
            <li
              className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey"
              title="comment on this post"
            >
              <MdModeComment />
              <span className="text-sm text-dark-grey">
                {post.comments.length}
              </span>
            </li>
          </Link>
          <li
            className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey"
            title="share post"
          >
            <FaShare />
            <span className="text-sm text-dark-grey"></span>
          </li>
          {postBookmarked ? <li
            className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey"
            title="bookmark post"
            onClick={unbookmarkHandler}
          >
          <HiBookmark className="text-purple"/>
            <span className="text-sm text-dark-grey"></span>
          </li> : <li
            className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey"
            title="bookmark post"
            onClick={bookmarkHandler}
          >
          <HiBookmark/>
            <span className="text-sm text-dark-grey"></span>
          </li> }
        </ul>
      </div>
    </div>
  );
};

export default PostCard;
