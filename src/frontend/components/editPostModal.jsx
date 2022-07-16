import { useState } from "react";
import { editPost } from "frontend/features/posts/postsSlice";
import { useDispatch } from "react-redux";
import useToast from "frontend/custom/useToast";

const EditPostModal = ({ showModal, setShowModal, post }) => {
  const [postContent, setPostContent] = useState(post);
  const dispatch = useDispatch();
  const { showToast } = useToast();
  console.log(postContent);

  const editPostHandler = () => {
    dispatch(editPost(postContent));
    showToast("Post Edited Successfully", "success");
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-transparent">
          <div className="relative w-1/2 my-6 m-auto">
            <div className="border-0 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex p-5 border-b border-solid border-grey rounded-t w-full">
                <h3 className="text-2xl font-semibold">Edit Posts</h3>
              </div>
              <input
                type="text"
                defaultValue={post.content}
                onChange={(e) =>
                  setPostContent({
                    ...postContent,
                    content: e.target.value,
                  })
                }
                className="h-12 border-2 border-grey mx-4 my-2 px-4 rounded-2xl"
              />
              <div className="flex items-center justify-end py-2 rounded-b">
                <button
                  className="text-black bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4 mb-1"
                  type="button"
                  onClick={editPostHandler}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPostModal;
