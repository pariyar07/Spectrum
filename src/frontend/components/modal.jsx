import { useRef, useState } from "react";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { editUserData } from "frontend/features/auth/authSlice";
import useToast from "frontend/custom/useToast";

const Modal = ({ showModal, setShowModal }) => {
  const imageRef = useRef();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const [updateUserData, setUpdateUserData] = useState(user);
  const { showToast } = useToast();

  const uploadImage = () => {
    imageRef.current.click();
  };

  const updateUserDataHandler = () => {
    dispatch(editUserData(updateUserData));
    setShowModal(false);
    showToast("User Profile updated successfully", "success");
  };

  return (
    <>
      {showModal && (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-transparent">
          <div className="relative w-1/2 my-6 m-auto">
            <div className="border-0 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex p-5 border-b border-solid border-grey rounded-t w-full">
                <h3 className="text-2xl font-semibold">Edit Profile</h3>
              </div>
              <div className="p-6 flex-auto">
                <form className="rounded px-8 pt-6 pb-8 w-full">
                  <label className="block text-black text-sm font-bold mb-1 group relative w-fit m-auto cursor-pointer">
                    <img
                      src={user.profileImage}
                      alt="profile pic"
                      className="rounded-full w-32 h-32"
                      onClick={uploadImage}
                    />
                    <RiUploadCloud2Fill
                      className="text-6xl text-black bg-transparent rounded-full px-2 py-2 hidden group-hover:block absolute right-9 top-10"
                      onClick={uploadImage}
                    />
                  </label>
                  <input
                    type="file"
                    ref={imageRef}
                    className="shadow appearance-none rounded w-full py-2 px-1 text-black mb-8 hidden"
                    onChange={(e) =>
                      setUpdateUserData({
                        ...updateUserData,
                        profileImage: URL.createObjectURL(e.target.files[0]),
                      })
                    }
                  />
                  <label className="block text-black text-sm font-bold mb-1">
                    Update Bio
                  </label>
                  <input
                    className="shadow appearance-none rounded w-full py-2 px-1 text-black mb-8"
                    defaultValue={user.bio}
                    onChange={(e) =>
                      setUpdateUserData({
                        ...updateUserData,
                        bio: e.target.value,
                      })
                    }
                  />
                  <label className="block text-black text-sm font-bold mb-1">
                    Update Url
                  </label>
                  <input
                    className="shadow appearance-none rounded w-full py-2 px-1 text-black"
                    defaultValue={user.profileLink}
                    onChange={(e) =>
                      setUpdateUserData({
                        ...updateUserData,
                        profileLink: e.target.value,
                      })
                    }
                  />
                </form>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-grey rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="text-black bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={updateUserDataHandler}
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

export default Modal;
