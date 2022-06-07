import BookmarkCard from "frontend/components/bookmarkCard";
import { usePosts } from "frontend/context/postContext";
import LeftNav from "frontend/components/leftNav.jsx";
import RightNav from "frontend/components/rightNav.jsx";

const Bookmark = () => {
    const { postsState: { bookmarks } } = usePosts()
    return (
        <>
            <LeftNav />
            <div className="w-8/12 border-grey border-x">
            <p className="flex justify-center text-xl font-semibold my-4">Bookmarks</p>
                {bookmarks.map(bookmark => {
                    return <BookmarkCard bookmark={bookmark} />
                })}
            </div>
            <RightNav />
        </>
    )
}

export default Bookmark