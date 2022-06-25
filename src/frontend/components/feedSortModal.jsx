import { FiTrendingUp } from "react-icons/fi";
import { MdUpdate } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  sortToTrending,
  sortToOldest,
} from "frontend/features/posts/postsSlice";
import useToast from "frontend/custom/useToast";

const FeedSortModal = ({ showUserFeedModal }) => {
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const sortTrendingHandler = () => {
    dispatch(sortToTrending());
    showToast("Post sorted to Trending", "success");
  };

  const sortOldestHandler = () => {
    dispatch(sortToOldest());
    showToast("Post sorted to Oldest", "success");
  };

  return (
    <>
      {showUserFeedModal && (
        <ul className="flex flex-col z-50 absolute top-4 right-4 bg-purple text-white text-base rounded-3xl overflow-hidden py-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <li className="text-start pl-2">Sort by:</li>
          <li
            onClick={sortTrendingHandler}
            className="flex items-center justify-center transition-all cursor-pointer px-8 py-1 w-full text-lg font-semibold hover:bg-dark-purple"
          >
            <FiTrendingUp />
            &nbsp; Trending
          </li>
          <li
            onClick={sortOldestHandler}
            className=" flex items-center justify-center transition-all cursor-pointer px-8 py-1 w-full text-lg font-semibold hover:bg-dark-purple"
          >
            <MdUpdate />
            &nbsp; Oldest
          </li>
        </ul>
      )}
    </>
  );
};

export default FeedSortModal;
