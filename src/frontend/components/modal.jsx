import { useRef, useEffect } from "react";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { GiCancel } from "react-icons/gi";
import { useUser } from "frontend/context/userContext.jsx";

const Modal = ({ showModal, setShowModal, editUserData, setEditUserData }) => {
    const imageRef = useRef();
    const { loggedUserData } = useUser();

    const uploadImage = () => {
        imageRef.current.click();
    }

    const updateUserData = () => {
        setShowModal(false)
    }

    useEffect(() => {
        localStorage.setItem("edited-data", JSON.stringify(editUserData))
    })

    return (
        <>
            {showModal &&
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-transparent">
                    <div className="relative w-1/2 my-6 m-auto">
                        <div className="border-0 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex p-5 border-b border-solid border-grey rounded-t w-full" >
                                <h3 className="text-2xl font-semibold">Edit Profile</h3>
                            </div>
                            <div className="p-6 flex-auto">
                                <form className="rounded px-8 pt-6 pb-8 w-full">
                                    <label className="block text-black text-sm font-bold mb-1 group relative w-fit m-auto cursor-pointer">
                                        <img src={loggedUserData.profileImage} alt="profile pic" className="rounded-full w-32" onClick={uploadImage} />
                                        <RiUploadCloud2Fill
                                            className="text-6xl text-black bg-transparent rounded-full px-2 py-2 hidden group-hover:block absolute right-9 top-10"
                                            onClick={uploadImage}
                                        />
                                    </label>
                                    {editUserData.profileImage === "" ? "" :
                                        <p className="flex items-center justify-center m-auto w-fit bg-purple text-white text-base px-6 py 2 rounded-full">
                                            <RiUploadCloud2Fill />&nbsp;
                                            {editUserData.profileImage.name}&nbsp; <GiCancel className="cursor-pointer"
                                                onClick={() => setEditUserData({ ...editUserData, profileImage: "" })}
                                            /></p>}
                                    <input type="file" ref={imageRef}
                                        className="shadow appearance-none rounded w-full py-2 px-1 text-black mb-8 hidden"
                                        onChange={(e) => setEditUserData({ ...editUserData, profileImage: URL.createObjectURL(e.target.files[0]) })} />
                                    <label className="block text-black text-sm font-bold mb-1">
                                        Update Bio
                                    </label>
                                    <input className="shadow appearance-none rounded w-full py-2 px-1 text-black mb-8" defaultValue={loggedUserData.bio}
                                        onChange={(e) => setEditUserData({ ...editUserData, bio: e.target.value })} />
                                    <label className="block text-black text-sm font-bold mb-1">
                                        Update Url
                                    </label>
                                    <input className="shadow appearance-none rounded w-full py-2 px-1 text-black"
                                        defaultValue={loggedUserData.profileLink}
                                        onChange={(e) => setEditUserData({ ...editUserData, profileLink: e.target.value })} />
                                </form>
                            </div>
                            <div className="flex items-center justify-end p-6 border-t border-solid border-grey rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    className="text-black bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    onClick={updateUserData}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Modal