import { useState } from "react";
import LeftNav from "frontend/components/leftNav.jsx";
import RightNav from "frontend/components/rightNav.jsx";
import { IoIosArrowBack } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { BiLink } from "react-icons/bi";
import { BsCalendarEventFill } from "react-icons/bs";
import Modal from "frontend/components/modal";
import FollowModal from "frontend/components/followModal";
import PostCard from "frontend/components/postCard";
import useToast from "frontend/custom/useToast";
import { useSelector } from "react-redux";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFollowingModal, setShowFollowingModal] = useState(false);
  const { showToast } = useToast();
  const { posts } = useSelector((store) => store.posts);
  const { user } = useSelector((store) => store.auth);

  return (
    <>
      <LeftNav />
      <main
        className="flex flex-col max-w-2xl border-grey border-x gap-2 relative"
        key={user._id}
      >
        <section className="w-2xl">
          <div className="flex items-center gap-4">
            <IoIosArrowBack className="text-3xl" />
            <div>
              <p className="text-xl font-semibold" value={user.firstName}>
                {user.firstName}
              </p>
              <p className="text-sm">
                {posts.filter((post) => post.uploadedPost).length} Posts
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full items-end relative">
            <img src={user.backgroundImage} alt="profile backgroung img" />
            <button
              className="border-2 border-dark-grey px-6 py-1 rounded-full font-semibold text-lg w-fit mr-4"
              onClick={() => setShowModal(true)}
            >
              Edit Profile
            </button>
            <img
              src={user.profileImage}
              alt="profile pic"
              className="rounded-full w-32 h-32 absolute top-1/2 left-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              value={user.profileImage}
            />
          </div>
          <div>
            <div className="ml-6 mt-4">
              <p className="text-2xl font-bold">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-sm text-dark-grey font-medium">
                @{user.firstName}
              </p>
            </div>
            <p className="mx-6 mt-4 font-medium" value={user.bio}>
              {user.bio}
            </p>
            <ul className="flex gap-6 mx-6 my-4">
              <li className="flex text-dark-grey font-medium items-center gap-1">
                <MdLocationPin />
                <p>India</p>
              </li>
              <li className="flex text-dark-grey font-medium items-center gap-1">
                <BiLink />
                <a
                  href={user.profileLink}
                  className="text-link"
                  defaultValue={user.profileLink}
                >
                  {user.profileLink}
                </a>
              </li>
              <li className="flex text-dark-grey font-medium items-center gap-1">
                <BsCalendarEventFill />
                <p>Joined June 2022</p>
              </li>
            </ul>
            <div className="flex gap-6 mx-6">
              <p
                className="font-semibold cursor-pointer"
                onClick={() => setShowFollowingModal(true)}
              >
                {user.following.length}&nbsp;
                <span className="text-dark-grey font-normal">Following</span>
              </p>
              <p className="font-semibold cursor-pointer">
                {user.followers.length}&nbsp;
                <span className="text-dark-grey font-normal">Followers</span>
              </p>
            </div>
          </div>
        </section>
        <section>
          <ul className="flex justify-around border-grey border-b">
            <li
              className="px-8 py-2 rounded-full text-lg font-semibold transition-all hover:bg-medium-grey hover:text-white cursor-pointer border-b-2 border-purple"
              title="Posts"
            >
              Posts
            </li>
            <li
              className="px-8 py-2 rounded-full text-lg font-semibold transition-all hover:bg-medium-grey hover:text-white cursor-pointer"
              title="Posts & replies"
              onClick={() => showToast("Coming Soon", "warning")}
            >
              Posts & replies
            </li>
            <li
              className="px-8 py-2 rounded-full text-lg font-semibold transition-all hover:bg-medium-grey hover:text-white cursor-pointer"
              title="Media"
              onClick={() => showToast("Coming Soon", "warning")}
            >
              Media
            </li>
            <li
              className="px-8 py-2 rounded-full text-lg font-semibold transition-all hover:bg-medium-grey hover:text-white cursor-pointer"
              title="Likes"
              onClick={() => showToast("Coming Soon", "warning")}
            >
              Likes
            </li>
          </ul>
        </section>
        {posts
          .filter((post) => post.uploadedPost === true)
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
      <FollowModal
        showModal={showFollowingModal}
        setShowModal={setShowFollowingModal}
      />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <RightNav />
    </>
  );
};

export default Profile;
