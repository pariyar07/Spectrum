import { usePosts } from "frontend/context/postContext";
import PostCard from "frontend/components/postCard";

const HomepagePost = () => {
    const { allPosts } = usePosts();

    return (<>
        {allPosts.map(post => {
            return <div key={post._id} className="flex border-b border-grey px-4 py-4">
                <PostCard post={post}/>
            </div>
        }).reverse()
        }
    </>)
}

export default HomepagePost