import { usePosts } from "frontend/context/postContext";
import PostCard from "frontend/components/postCard";

const HomepagePost = () => {
    const { postsState: { posts }, receivedPost } = usePosts();

    return (<>
        {posts.map(post => {
            return <div key={post._id} className="flex border-b border-grey px-4 py-4">
                <PostCard post={post}/>
            </div>
        }).reverse()
        }
        {receivedPost.map(post => {
            return <div key={post._id} className="flex border-b border-grey px-4 py-4">
                <PostCard post={post}/>
            </div>
        })
        }
    </>)
}

export default HomepagePost