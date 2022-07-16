import { useState } from "react";
import { AiOutlineRetweet, AiFillLike } from "react-icons/ai";
import { MdModeComment } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { HiBookmark } from "react-icons/hi";
import { Link } from "react-router-dom";
import useToast from "frontend/custom/useToast";
import PostOptionModal from "frontend/components/postOptionModal";
import { useDispatch, useSelector } from "react-redux";
import {
  likePost,
  unlikePost,
  bookmarkPost,
  unBookmarkPost,
} from "frontend/features/posts/postsSlice";

const PostCard = ({ post }) => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [postBookmarked, setPostBookmarked] = useState(false);
  const [postLiked, setPostLiked] = useState(false);
  const { showToast } = useToast();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  const bookmarkHandler = () => {
    dispatch(bookmarkPost(post));
    showToast("Post Bookmarked", "success");
    setPostBookmarked(true);
  };

  const unbookmarkHandler = () => {
    dispatch(unBookmarkPost(post));
    showToast("Removed from Bookmarks", "success");
    setPostBookmarked(false);
  };

  const postLikesHandler = () => {
    dispatch(likePost(post._id));
    showToast("Post Liked", "success");
    setPostLiked(true);
  };

  const postUnlikeHandler = () => {
    dispatch(unlikePost(post._id));
    showToast("Post Unliked", "success");
    setPostLiked(false);
  };

  const profileImageHandler = () => {
    return post.uploadedPost === true
      ? user.profileImage
      : "https://picsum.photos/60/60";
  };

  return (
    <div className="w-full flex">
      <img
        src={profileImageHandler()}
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
          {post.uploadedPost === true && (
            <BsThreeDots
              className="cursor-pointer"
              title="more"
              onClick={() => setShowProfileModal((active) => !active)}
            />
          )}
          {showProfileModal && <PostOptionModal post={post} />}
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
          {postLiked ? (
            <li
              className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey"
              title="like a post"
              onClick={postUnlikeHandler}
            >
              <AiFillLike className="text-red" />
              <span className="text-sm text-dark-grey">{post.likes}</span>
            </li>
          ) : (
            <li
              className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey"
              title="like a post"
              onClick={postLikesHandler}
            >
              <AiFillLike />
              <span className="text-sm text-dark-grey">{post.likes}</span>
            </li>
          )}
          <li
            className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey"
            title="scale this post"
          >
            <AiOutlineRetweet />
            <span className="text-sm text-dark-grey">{post.scale}</span>
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
          {postBookmarked ? (
            <li
              className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey"
              title="bookmark post"
              onClick={unbookmarkHandler}
            >
              <HiBookmark className="text-purple" />
              <span className="text-sm text-dark-grey"></span>
            </li>
          ) : (
            <li
              className="flex items-center gap-1 cursor-pointer transition-all hover:text-dark-grey"
              title="bookmark post"
              onClick={bookmarkHandler}
            >
              <HiBookmark />
              <span className="text-sm text-dark-grey"></span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PostCard;
