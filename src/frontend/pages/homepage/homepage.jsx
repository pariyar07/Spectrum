import { useState } from "react";
import LeftNav from "frontend/components/leftNav.jsx";
import RightNav from "frontend/components/rightNav.jsx";
import { BsSortDownAlt, BsImageFill, BsFillEmojiSmileFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import Posts from "frontend/components/posts.jsx";
import { v4 as uuid } from "uuid";
import { usePosts } from "frontend/context/postContext";
import { useToast } from 'frontend/custom/useToast';
import date from 'date-and-time';

const Homepage = () => {
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const { postsDispatch } = usePosts();
    const { showToast } = useToast();

    const selectImageFile = (e) => {
        e.preventDefault()
        setImage(e.target.files[0])
    }

    const uploadPost = (e) => {
        e.preventDefault()
        if (!content && !image) {
            showToast("Nothing to post", 'warning');
            return
        }
        const newPost = !image ? {
            _id: uuid(),
            content: content,
            image: "",
            username: "Admin",
            accountName: "@admin",
            profileImage: "https://picsum.photos/60/60",
            createdAt: date.format(new Date(), 'HH:mm, YYYY/MM/DD'),
            likes: {
                likeCount: 0,
                likedBy: [],
            },
            scale: {
                scaleCount: 0,
                scaledBy: []
            },
            comments: [],
        } : {
            _id: uuid(),
            content: content,
            image: URL.createObjectURL(image),
            username: "Admin",
            accountName: "@admin",
            profileImage: "https://picsum.photos/60/60",
            createdAt: date.format(new Date(), 'HH:mm, YYYY/MM/DD'),
            likes: {
                likeCount: 0,
                likedBy: [],
            },
            scale: {
                scaleCount: 0,
                scaledBy: []
            },
            comments: [],
        }
        postsDispatch({ type: "ADD_POST", payload: newPost })
        showToast("Post Uploaded", 'success');
        setContent("")
        setImage("")
    }

    const removeImageFromUpload = () => {
        return setImage("")
    }

    return (
        <>
            <LeftNav/>
            <main className="max-w-2xl border-grey border-x">
                <div className="flex items-center justify-between mx-6 mt-2 text-xl font-medium">
                    <p>Home</p>
                    <BsSortDownAlt className="cursor-pointer" title="sort posts" />
                </div>
                <form className="flex flex-col gap-2 w-full mt-4 px-6 py-2 border-b border-grey">
                    <div className="flex gap-2">
                        <img src="/assets/spectrum.png" alt="profile pic" className="w-11 h-11 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
                        <input type="text" className="w-full px-4 rounded-xl" placeholder="What's Happening?" value={content} onChange={(e) => setContent(e.target.value)} />
                    </div>
                    {image === "" ? "" : <p className="flex bg-purple text-white py-1 pl-4 pr-2 justify-start items-center w-fit rounded-lg ml-16"><BsImageFill className="mr-2" />{image.name}&nbsp;&nbsp; <GiCancel onClick={removeImageFromUpload} /></p>}
                    <div className="flex justify-between items-center ml-14 text-xl">
                        <div className="flex gap-4">
                            <label htmlFor="image-upload"><BsImageFill className="cursor-pointer" title="upload image" /></label>
                            <input type="file" className="hidden" onChange={selectImageFile} id="image-upload" />
                            <AiOutlineGif className="cursor-pointer" title="upload gif" />
                            <BiPoll className="cursor-pointer" title="initiate poll" />
                            <BsFillEmojiSmileFill className="cursor-pointer" title="use emoji" />
                            <BsFillCalendarCheckFill className="cursor-pointer" title="schedule" />
                            <MdLocationOn className="cursor-pointer" title="update location" />
                        </div>
                        <button className="bg-purple py-2 rounded-xl px-6 text-white text-base font-medium hover:bg-dark-purple transition ease-out delay-100" title="post" onClick={uploadPost}>Post</button>
                    </div>
                </form>
                <Posts fileName={image.name} />
            </main>
            <RightNav />
        </>
    )
}

export default Homepage