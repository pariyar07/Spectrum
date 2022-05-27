import { CgMore } from "react-icons/cg";

const RightNav = () => {
    return (
        <div className="flex flex-col min-w-4/12">
            <input type="text" placeholder="🔍 Search Spectrum" className="ml-5 my-2 px-3 py-2 rounded-full w-11/12 bg-grey placeholder:text-dark-grey"/>
            <div className="flex flex-col gap-2 px-6 mt-4 bg-grey rounded-2xl mx-6 py-4">
                <h1 className="text-2xl font-medium mb-2">What's happening</h1>
                <div className="flex justify-between items-center cursor-pointer px-2 py-2 hover:text-white hover:bg-dark-grey transition ease-in-out delay-100 rounded-xl">
                    <div>
                        <p className="text-sm">Movies · LIVE</p>
                        <p className="font-medium">Top Gun: Maverick hits the big screen</p>
                    </div>
                    <img className="w-14 h-14 rounded-xl" src="https://picsum.photos/60/60" alt="img" />
                </div>
                <div className="flex justify-between cursor-pointer px-2 py-2 hover:text-white hover:bg-dark-grey transition ease-in-out delay-100 rounded-xl">
                    <div>
                        <p className="text-sm">Sports · Trending</p>
                        <p className="font-medium">#Ronaldo</p>
                        <p className="text-xs">971.7K Posts</p>
                    </div>
                    <CgMore className="text-xl" title="more"/>
                </div>
                <div className="flex justify-between cursor-pointer px-2 py-2 hover:text-white hover:bg-dark-grey transition ease-in-out delay-100 rounded-xl">
                    <div>
                        <p className="text-sm">Music · Trending</p>
                        <p className="font-medium">#Coldplay</p>
                        <p className="text-xs">335.1K Posts</p>
                    </div>
                    <CgMore className="text-xl" title="more"/>
                </div>
                <div className="flex justify-between cursor-pointer px-2 py-2 hover:text-white hover:bg-dark-grey transition ease-in-out delay-100 rounded-xl">
                    <div>
                        <p className="text-sm">Trending in India</p>
                        <p className="font-medium">#ObiWan</p>
                        <p className="text-xs">53.4K Posts</p>
                    </div>
                    <CgMore className="text-xl" title="more"/>
                </div>
                <div className="flex justify-between items-center cursor-pointer px-2 py-2 hover:text-white hover:bg-dark-grey transition ease-in-out delay-100 rounded-xl">
                    <div>
                        <p className="text-sm">War in Ukraine · LIVE</p>
                        <p className="font-medium w-11/12">Russia calls for lifted sanctions amid global food crisis, continues its strikes in Ukraine</p>
                    </div>
                    <img className="w-14 h-14 rounded-xl" src="https://picsum.photos/60/60" alt="img" />
                </div>
                <p className="font-medium text-purple cursor-pointer hover:text-dark-purple">Show more</p>
            </div>
            <div className="flex flex-col gap-2 px-6 mt-4 bg-grey rounded-2xl mx-6 py-4 mb-4">
                <h1 className="text-2xl font-medium mb-2">Who to follow</h1>
                <div className="flex justify-between items-center cursor-pointer px-2 py-2 hover:text-white hover:bg-dark-grey transition ease-in-out delay-100 rounded-xl">
                    <div className="flex gap-2">
                        <img className="w-14 h-14 rounded-xl" src="https://picsum.photos/60/60" alt="img" />
                        <div>
                        <p className="text-sm">Tanay Pratap</p>
                        <p className="font-medium">@tanaypratap</p>
                        </div>
                    </div>
                    <button className="bg-purple text-white px-5 py-2 rounded-xl cursor-pointer" title="follow user">Follow</button>
                </div>
                <div className="flex justify-between items-center cursor-pointer px-2 py-2 hover:text-white hover:bg-dark-grey transition ease-in-out delay-100 rounded-xl">
                    <div className="flex gap-2">
                        <img className="w-14 h-14 rounded-xl" src="https://picsum.photos/60/60" alt="img" />
                        <div>
                        <p className="text-sm">Cristiano Ronaldo</p>
                        <p className="font-medium">@cristiano</p>
                        </div>
                    </div>
                    <button className="bg-purple text-white px-5 py-2 rounded-xl cursor-pointer" title="follow user">Follow</button>
                </div>
                <div className="flex justify-between items-center cursor-pointer px-2 py-2 hover:text-white hover:bg-dark-grey transition ease-in-out delay-100 rounded-xl">
                    <div className="flex gap-2">
                        <img className="w-14 h-14 rounded-xl" src="https://picsum.photos/60/60" alt="img" />
                        <div>
                        <p className="text-sm">Elon Musk</p>
                        <p className="font-medium">@elonmusk</p>
                        </div>
                    </div>
                    <button className="bg-purple text-white px-5 py-2 rounded-xl cursor-pointer" title="follow user">Follow</button>
                </div>
                <p className="font-medium text-purple cursor-pointer hover:text-dark-purple">Show more</p>
            </div>
        </div>
    )
}

export default RightNav