import { CgMore } from "react-icons/cg";

const ExploreContent = () => {
  return (
    <div className="flex flex-col gap-2 px-6 mt-4 bg-grey rounded-2xl mx-6 py-4">
      <h1 className="text-2xl font-medium mb-2">What's happening</h1>
      <div className="flex justify-between items-center cursor-pointer px-2 py-2 hover:text-white hover:bg-dark-grey transition ease-in-out delay-100 rounded-xl">
        <div>
          <p className="text-sm">Movies · LIVE</p>
          <p className="font-medium">Top Gun: Maverick hits the big screen</p>
        </div>
        <img
          className="w-14 h-14 rounded-xl"
          src="https://picsum.photos/60/60"
          alt="img"
        />
      </div>
      <div className="flex justify-between cursor-pointer px-2 py-2 hover:text-white hover:bg-dark-grey transition ease-in-out delay-100 rounded-xl">
        <div>
          <p className="text-sm">Sports · Trending</p>
          <p className="font-medium">#Ronaldo</p>
          <p className="text-xs">971.7K Posts</p>
        </div>
        <CgMore className="text-xl" title="more" />
      </div>
      <div className="flex justify-between cursor-pointer px-2 py-2 hover:text-white hover:bg-dark-grey transition ease-in-out delay-100 rounded-xl">
        <div>
          <p className="text-sm">Technology · Trending</p>
          <p className="font-medium">#Github</p>
          <p className="text-xs">341.1K Posts</p>
        </div>
        <CgMore className="text-xl" title="more" />
      </div>
      <div className="flex justify-between cursor-pointer px-2 py-2 hover:text-white hover:bg-dark-grey transition ease-in-out delay-100 rounded-xl">
        <div>
          <p className="text-sm">Music · Trending</p>
          <p className="font-medium">#Coldplay</p>
          <p className="text-xs">335.1K Posts</p>
        </div>
        <CgMore className="text-xl" title="more" />
      </div>
      <div className="flex justify-between items-center cursor-pointer px-2 py-2 hover:text-white hover:bg-dark-grey transition ease-in-out delay-100 rounded-xl">
        <div>
          <p className="text-sm">War in Ukraine · LIVE</p>
          <p className="font-medium w-11/12">
            Russia calls for lifted sanctions amid global food crisis, continues
            its strikes in Ukraine
          </p>
        </div>
        <img
          className="w-14 h-14 rounded-xl"
          src="https://picsum.photos/60/60"
          alt="img"
        />
      </div>
      <div className="flex justify-between cursor-pointer px-2 py-2 hover:text-white hover:bg-dark-grey transition ease-in-out delay-100 rounded-xl">
        <div>
          <p className="text-sm">Trending in India</p>
          <p className="font-medium">#ObiWan</p>
          <p className="text-xs">53.4K Posts</p>
        </div>
        <CgMore className="text-xl" title="more" />
      </div>
      <p className="font-medium text-purple cursor-pointer hover:text-dark-purple">
        Show more
      </p>
    </div>
  );
};

export default ExploreContent;
