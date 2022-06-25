import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deletePost } from "frontend/features/posts/postsSlice";
import useToast from "frontend/custom/useToast";
import EditPostModal from "frontend/components/editPostModal";

const PostOptionModal = ({ post }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const deletePostHandler = () => {
    dispatch(deletePost(post));
    showToast("Post Deleted", "success");
  };

  return (
    <>
      <ul className="absolute top-2 right-4 bg-purple text-white rounded-2xl overflow-hidden z-50">
        <li
          className="flex items-center px-8 py-2 cursor-pointer transition-all hover:bg-dark-purple"
          title="Edit Post"
          onClick={() => setShowEditModal(true)}
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
      <EditPostModal
        showModal={showEditModal}
        setShowModal={setShowEditModal}
        post={post}
      />
    </>
  );
};

export default PostOptionModal;
