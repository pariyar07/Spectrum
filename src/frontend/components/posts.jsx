import {useState} from 'react';
import SinglePost from "frontend/components/singlePost"

const Posts = () => {
    const [show, setShow] = useState(false)

    return (<div className="flex flex-col gap-2">
        <SinglePost/>
        {show && <SinglePost/>}
        <span className="font-semibold m-auto my-4 cursor-pointer transition-all hover:scale-110" title="load more" onClick={() => setShow(true)}>Load More...</span>
    </div>)
}

export default Posts