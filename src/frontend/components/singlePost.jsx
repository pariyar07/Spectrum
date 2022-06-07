import { useParams } from "react-router-dom";
import { usePosts } from "frontend/context/postContext";
import SinglePostDisplay from "frontend/components/singlePostDisplay";
import {Link} from "react-router-dom";

const SinglePost = () => {
    const { postId } = useParams();
    const { postsState: { posts }, receivedPost } = usePosts();


    function getPostDetails(posts, postId) {
        return posts.find((post) => post._id === postId);
    }

    const post = getPostDetails(posts, postId);
    const fetchedPost = getPostDetails(receivedPost, postId)

    return (
        <div className="w-full flex items-center justify-center flex-col">
            <div className="w-1/2 flex items-center justify-between">
                <Link to="/"><img src="/assets/spectrum.png" alt="profile pic" className="w-16 h-16"/></Link>
                <h1 className="font-semibold">Post Details</h1>
                <h1 className="text-2xl text-purple font-semibold">Spectrum</h1>
            </div>
            <SinglePostDisplay {...post} {...fetchedPost}/>
        </div>
    )
}

export default SinglePost