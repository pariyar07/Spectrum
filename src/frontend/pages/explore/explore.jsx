import ExploreContent from "frontend/components/exploreContent";
import LeftNav from "frontend/components/leftNav.jsx";
import RightNav from "frontend/components/rightNav.jsx";
import { FiSettings } from "react-icons/fi";

const Explore = () => {
  return (
    <>
      <LeftNav />
      <div className="w-8/12 border-grey border-x">
        <p className="flex justify-center text-xl font-semibold my-4">
          Explore
        </p>
        <div className="flex items-center justify-center gap-4">
          <input
            type="text"
            placeholder="🔍 Search Spectrum"
            className="ml-5 px-3 py-2 rounded-full w-11/12 bg-grey placeholder:text-dark-grey"
          />
          <FiSettings
            className="text-2xl mr-4 transition-all hover:rotate-45"
            title="Explore settings"
          />
        </div>
        <section className="mt-4">
          <ul className="flex justify-around">
            <li
              className="py-2 px-4 rounded-full font-semibold transition-all hover:bg-medium-grey hover:text-white cursor-pointer border-b-2 border-purple"
              title="For you"
            >
              For you
            </li>
            <li
              className="py-2 px-4 rounded-full font-semibold transition-all hover:bg-medium-grey hover:text-white cursor-pointer"
              title="COVID-19"
            >
              COVID-19
            </li>
            <li
              className="py-2 px-4 rounded-full font-semibold transition-all hover:bg-medium-grey hover:text-white cursor-pointer"
              title="Trending"
            >
              Trending
            </li>
            <li
              className="py-2 px-4 rounded-full font-semibold transition-all hover:bg-medium-grey hover:text-white cursor-pointer"
              title="News"
            >
              News
            </li>
            <li
              className="py-2 px-4 rounded-full font-semibold transition-all hover:bg-medium-grey hover:text-white cursor-pointer"
              title="Sports"
            >
              Sports
            </li>
            <li
              className="py-2 px-4 rounded-full font-semibold transition-all hover:bg-medium-grey hover:text-white cursor-pointer"
              title="Entertainment"
            >
              Entertainment
            </li>
          </ul>
        </section>
        <ExploreContent />
      </div>
      <RightNav />
    </>
  );
};

export default Explore;
