import { useState } from "react";
import useToast from 'frontend/custom/useToast.jsx'

const UserSection = ({user}) => {
  const [follow, setFollow] = useState(false);
  const {showToast} = useToast();

  const followHandler = () => {
      if(follow){
          setFollow(false);
          showToast("User unfollowed", "success")
      }
      else if(!follow){
        setFollow(true);
        showToast("User followed", "success")
      }
    }

  return (
    <div
              className="flex justify-between items-center cursor-pointer px-2 py-2 hover:text-white hover:bg-dark-grey transition ease-in-out delay-100 rounded-xl"
            >
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
                  <p className="font-medium">@{user.userName}</p>
                </div>
              </div>
              <button
                className="bg-purple text-white px-5 py-2 rounded-xl cursor-pointer"
                title="follow user"
                onClick={followHandler}
              >
                {follow ? "Unfollow" : "Follow"}
              </button>
            </div>
  )
}

export default UserSection