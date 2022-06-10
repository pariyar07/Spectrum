import { useState, useEffect } from "react";
import LeftNav from "frontend/components/leftNav.jsx";
import RightNav from "frontend/components/rightNav.jsx";
import { IoIosArrowBack } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { BiLink } from "react-icons/bi";
import { BsCalendarEventFill } from "react-icons/bs";
import Modal from "frontend/components/modal.jsx";
import { useUser } from "frontend/context/userContext";
import { usePosts } from "frontend/context/postContext";
import PostCard from "frontend/components/postCard";
import useToast from "frontend/custom/useToast";

const Profile = () => {
  const { loggedUserData } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [editUserData, setEditUserData] = useState(loggedUserData);
  const {
    postsState: { posts },
  } = usePosts();
  const { showToast } = useToast();

  useEffect(() => {
    const newData = localStorage.getItem("edited-data");
    if (newData) {
      setEditUserData(JSON.parse(newData));
    }
  }, []);

  return (
    <>
      <LeftNav />
      <main
        className="flex flex-col max-w-2xl border-grey border-x gap-2"
        key={editUserData._id}
      >
        <section className="w-2xl">
          <div className="flex items-center gap-4">
            <IoIosArrowBack className="text-3xl" />
            <div>
              <p
                className="text-xl font-semibold"
                value={editUserData.firstName}
              >
                {editUserData.firstName}
              </p>
              <p className="text-sm">{posts.length} Posts</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full items-end relative">
            <img
              src={editUserData.backgroundImage}
              alt="profile backgroung img"
            />
            <button
              className="border-2 border-dark-grey px-6 py-1 rounded-full font-semibold text-lg w-fit mr-4"
              onClick={() => setShowModal(true)}
            >
              Edit Profile
            </button>
            <img
              src={editUserData.profileImage}
              alt="profile pic"
              className="rounded-full w-32 h-32 absolute top-1/2 left-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              value={editUserData.profileImage}
            />
          </div>
          <div>
            <div className="ml-6 mt-4">
              <p className="text-2xl font-bold">
                {editUserData.firstName} {editUserData.lastName}
              </p>
              <p className="text-sm text-dark-grey font-medium">
                @{editUserData.firstName}
              </p>
            </div>
            <p className="mx-6 mt-4 font-medium" value={editUserData.bio}>
              {editUserData.bio}
            </p>
            <ul className="flex gap-6 mx-6 my-4">
              <li className="flex text-dark-grey font-medium items-center gap-1">
                <MdLocationPin />
                <p>India</p>
              </li>
              <li className="flex text-dark-grey font-medium items-center gap-1">
                <BiLink />
                <a
                  href={editUserData.profileLink}
                  className="text-link"
                  defaultValue={editUserData.profileLink}
                >
                  {editUserData.profileLink}
                </a>
              </li>
              <li className="flex text-dark-grey font-medium items-center gap-1">
                <BsCalendarEventFill />
                <p>Joined June 2022</p>
              </li>
            </ul>
            <div className="flex gap-6 mx-6">
              <p className="font-semibold">
                0 <span className="text-dark-grey font-normal">Following</span>
              </p>
              <p className="font-semibold">
                0 <span className="text-dark-grey font-normal">Followers</span>
              </p>
            </div>
          </div>
        </section>
        <section>
          <ul className="flex justify-between border-grey border-b">
            <li
              className="px-8 py-2 text-lg font-semibold transition-all hover:bg-medium-grey hover:text-white cursor-pointer border-b-2 border-purple"
              title="Posts"
            >
              Posts
            </li>
            <li
              className="px-8 py-2 text-lg font-semibold transition-all hover:bg-medium-grey hover:text-white cursor-pointer"
              title="Posts & replies"
              onClick={() => showToast("Coming Soon", "warning")}
            >
              Posts & replies
            </li>
            <li
              className="px-8 py-2 text-lg font-semibold transition-all hover:bg-medium-grey hover:text-white cursor-pointer"
              title="Media"
              onClick={() => showToast("Coming Soon", "warning")}
            >
              Media
            </li>
            <li
              className="px-8 py-2 text-lg font-semibold transition-all hover:bg-medium-grey hover:text-white cursor-pointer"
              title="Likes"
              onClick={() => showToast("Coming Soon", "warning")}
            >
              Likes
            </li>
          </ul>
        </section>
        {posts
          .map((post) => (
            <div
              className="flex flex-col border-b border-grey gap px-2 pb-4 gap-4"
              key={post._id}
            >
              <PostCard post={post} />
            </div>
          ))
          .reverse()}
      </main>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        editUserData={editUserData}
        setEditUserData={setEditUserData}
      />
      <RightNav />
    </>
  );
};

export default Profile;
