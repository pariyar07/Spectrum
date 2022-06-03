import { useState, useEffect } from "react";
import LeftNav from "frontend/components/leftNav.jsx";
import RightNav from "frontend/components/rightNav.jsx";
import { IoIosArrowBack } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { BiLink } from "react-icons/bi";
import { BsCalendarEventFill } from "react-icons/bs";
import Modal from "frontend/components/modal.jsx";
import axios from "axios";

const Profile = () => {
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState([]);
    const [profileData, setProfileData] = useState({bio: "", profileLink: "", profileImage: ""});

    const fetchUserData = async () => {
        const fetchedUserData = await axios.get(`/api/users/`);
        setUserData(fetchedUserData.data.users);
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    const loggedUserData = {...userData[0]}

    const updateUserData = () => {
        const newProfileData = {
            ...profileData.bio = loggedUserData.bio
        }
        setShowModal(false)
    }

    return (
        <>
            <LeftNav />
                <main className="flex flex-col max-w-2xl border-grey border-x gap-2" key={loggedUserData._id}>
                    <section className="w-2xl">
                        <div className="flex items-center gap-4">
                            <IoIosArrowBack className="text-3xl" />
                            <div>
                                <p className="text-xl font-semibold" value={loggedUserData.firstName}>{loggedUserData.firstName}</p>
                                <p className="text-sm">0 Posts</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-full items-end relative">
                            <img src={loggedUserData.backgroundImage} alt="profile backgroung img" />
                            <button className="border-2 border-dark-grey px-6 py-1 rounded-full font-semibold text-lg w-fit mr-4" onClick={() => setShowModal(true)}>Edit Profile</button>
                            <img src={loggedUserData.profileImage} alt="profile pic" className="rounded-full w-32 h-32 absolute top-1/2 left-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" />
                        </div>
                        <div>
                            <div className="ml-6 mt-4">
                                <p className="text-2xl font-bold">{loggedUserData.firstName} {loggedUserData.lastName}</p>
                                <p className="text-sm text-dark-grey font-medium">@Admin</p>
                            </div>
                            <p className="mx-6 mt-4 font-medium" value={profileData.bio}>{profileData.bio}</p>
                            <ul className="flex gap-6 mx-6 my-4">
                                <li className="flex text-dark-grey font-medium items-center gap-1">
                                    <MdLocationPin />
                                    <p>India</p>
                                </li>
                                <li className="flex text-dark-grey font-medium items-center gap-1">
                                    <BiLink />
                                    <a href={loggedUserData.profileLink} className="text-link">{loggedUserData.profileLink}</a>
                                </li>
                                <li className="flex text-dark-grey font-medium items-center gap-1">
                                    <BsCalendarEventFill />
                                    <p>Joined June 2022</p>
                                </li>
                            </ul>
                            <div className="flex gap-6 mx-6">
                                <p className="font-semibold">0 <span className="text-dark-grey font-normal">Following</span></p>
                                <p className="font-semibold">0 <span className="text-dark-grey font-normal">Followers</span></p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <ul className="flex justify-between border-grey border-b">
                            <li className="px-8 py-2 text-lg font-semibold transition-all hover:bg-medium-grey hover:text-white">Posts</li>
                            <li className="px-8 py-2 text-lg font-semibold transition-all hover:bg-medium-grey hover:text-white">Posts & replies</li>
                            <li className="px-8 py-2 text-lg font-semibold transition-all hover:bg-medium-grey hover:text-white">Media</li>
                            <li className="px-8 py-2 text-lg font-semibold transition-all hover:bg-medium-grey hover:text-white">Likes</li>
                        </ul>
                    </section>
                </main>
            <Modal showModal={showModal} setShowModal={setShowModal} update={updateUserData}/>
            <RightNav />
        </>
    )
}

export default Profile