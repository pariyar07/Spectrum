import { useSelector } from "react-redux";

const FollowModal = ({ showModal, setShowModal }) => {
  const { user } = useSelector((store) => store.auth);

  return (
    <>
      {showModal && (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-transparent">
          <div className="relative w-1/4 my-6 m-auto">
            <div className="border-0 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex p-5 border-b border-solid border-grey rounded-t w-full">
                <h3 className="text-2xl font-semibold">Users Following</h3>
              </div>
              <div className="flex-auto">
                {user.following.map((user) => {
                  return (
                    <div className="flex justify-between mb-3 py-2 px-4 border-b border-grey">
                      <div className="flex gap-3 items-center">
                        <img
                          src={user.profileImage}
                          alt="profile pic"
                          className="w-12 h-12 rounded-full ml-4"
                        />
                        <div className="flex flex-col">
                          <p>
                            {user.firstName} {user.lastName}
                          </p>
                          <p>@{user.username}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-end py-2 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FollowModal;
