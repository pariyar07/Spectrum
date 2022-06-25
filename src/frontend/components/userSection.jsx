import { useState } from "react";
import useToast from "frontend/custom/useToast.jsx";
import { useDispatch } from "react-redux";
import { follow, unFollow } from "frontend/features/auth/authSlice";

const UserSection = ({ user }) => {
  const [followButton, setFollowButton] = useState(false);
  const { showToast } = useToast();
  const dispatch = useDispatch();

  const followHandler = () => {
    dispatch(follow(user));
    showToast(`${user.firstName} ${user.lastName} followed`, "success");
    setFollowButton(true);
  };

  const unfollowHandler = () => {
    dispatch(unFollow(user));
    showToast(`${user.firstName} ${user.lastName} unfollowed`, "success");
    setFollowButton(false);
  };

  return (
    <div className="flex justify-between items-center cursor-pointer px-2 py-2 hover:text-white hover:bg-dark-grey transition ease-in-out delay-100 rounded-xl">
      <div className="flex gap-2">
        <img
          className="w-14 h-14 rounded-xl"
          src="https://picsum.photos/60/60"
          alt="img"
        />
        <div>
          <p className="text-sm">
            {user.firstName} {user.lastName}
          </p>
          <p className="font-medium">@{user.username}</p>
        </div>
      </div>
      {followButton ? (
        <button
          className="bg-purple text-white px-5 py-2 rounded-xl cursor-pointer"
          title="unfollow user"
          onClick={unfollowHandler}
        >
          Unfollow
        </button>
      ) : (
        <button
          className="bg-purple text-white px-5 py-2 rounded-xl cursor-pointer"
          title="follow user"
          onClick={followHandler}
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default UserSection;
