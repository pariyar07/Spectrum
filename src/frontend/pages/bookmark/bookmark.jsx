import BookmarkCard from "frontend/components/bookmarkCard";
import LeftNav from "frontend/components/leftNav.jsx";
import RightNav from "frontend/components/rightNav.jsx";
import { useSelector } from "react-redux";

const Bookmark = () => {
  const { bookmarks } = useSelector((store) => store.posts);

  return (
    <>
      <LeftNav />
      <div className="w-8/12 border-grey border-x">
        <p className="flex justify-center text-xl font-semibold my-4">
          Bookmarks
        </p>
        {bookmarks.map((bookmark) => {
          return <BookmarkCard bookmark={bookmark} key={bookmark._id} />;
        })}
      </div>
      <RightNav />
    </>
  );
};

export default Bookmark;
