import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "frontend/features/posts/postsSlice";
import PostCard from "frontend/components/postCard";

const HomepagePost = () => {
  const { posts, status } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadPosts());
    }
  }, [dispatch, status]);

  return status === "loading" ? (
    <p className="m-auto text-2xl font-semibold text-purple animate-pulse">
      Loading...
    </p>
  ) : (
    <>
      {status === "success" &&
        posts
          .map((post) => {
            return (
              <div
                key={post._id}
                className="flex border-b border-grey px-4 py-4"
              >
                <PostCard post={post} />
              </div>
            );
          })
          .reverse()}
    </>
  );
};

export default HomepagePost;
