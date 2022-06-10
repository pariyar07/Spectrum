import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { usePosts } from "frontend/context/postContext";

const ProfileModal = ({ post }) => {
  const {postsDispatch } = usePosts();

  const editPostHandler = () => {
    postsDispatch({ type: "EDIT_POST", payload: post });
  };

  const deletePostHandler = () => {
    postsDispatch({ type: "DELETE_POST", payload: post });
  };

  return (
    <>
      <ul className="absolute top-2 right-4 bg-purple text-white rounded-2xl overflow-hidden z-50">
        <li
          className="flex items-center px-8 py-2 cursor-pointer transition-all hover:bg-dark-purple"
          title="Edit Post"
          onClick={editPostHandler}
        >
          <AiFillEdit />
          &nbsp; Edit Post
        </li>
        <li
          className="flex items-center px-8 py-2 cursor-pointer transition-all hover:bg-dark-purple"
          title="Delete Post"
          onClick={deletePostHandler}
        >
          <MdDelete />
          &nbsp; Delete Post
        </li>
      </ul>
    </>
  );
};

export default ProfileModal;
