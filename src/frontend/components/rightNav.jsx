import { useState } from "react";
import UserSection from "frontend/components/userSection";
import ExploreContent from "frontend/components/exploreContent.jsx";
import { useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";

const RightNav = () => {
  const location = useLocation();
  const path = location.pathname;
  // eslint-disable-next-line
  const [display, setDisplay] = useState(path === "/explore" ? false : true);

  const otherUsers = [
    {
      _id: uuid(),
      firstName: "Tanay",
      lastName: "Pratap",
      userName: "tanaypratap",
    },
    {
      _id: uuid(),
      firstName: "Elon",
      lastName: "Musk",
      userName: "elonmusk",
    },
    {
      _id: uuid(),
      firstName: "Cristiano",
      lastName: "Ronaldo",
      userName: "cristiano",
    },
  ];

  return (
    <div className="flex flex-col w-6/12">
      {display && (
        <input
          type="text"
          placeholder="🔍 Search Spectrum"
          className="ml-5 my-2 px-3 py-2 rounded-full w-11/12 bg-grey placeholder:text-dark-grey"
        />
      )}
      {display && <ExploreContent />}
      <div className="flex flex-col gap-2 px-6 mt-4 bg-grey rounded-2xl mx-6 py-4 mb-4">
        <h1 className="text-2xl font-medium mb-2">Who to follow</h1>
        {otherUsers.map((user) => {
          return <UserSection user={user} key={user._id} />;
        })}
        <p className="font-medium text-purple cursor-pointer hover:text-dark-purple">
          Show more
        </p>
      </div>
    </div>
  );
};

export default RightNav;
