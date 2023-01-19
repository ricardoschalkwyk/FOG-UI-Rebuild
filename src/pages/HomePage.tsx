import { Button, Footer } from "../components";

const HomePage = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center md:w-max lg:w-3/5">
      <div>
        <div className="mt-36 h-full">
          <span className="flex h-80 w-full items-center justify-center rounded-lg bg-yellow-400">
            Welcome
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="flex h-80 w-full items-center justify-center rounded-lg bg-blue-400">
            We are online video
          </span>
          <span className="flex h-80 w-full items-center justify-center rounded-lg bg-red-400">
            Global video
          </span>
        </div>

        <div className="mt-5 h-full">
          <span className="flex h-96 w-full items-center justify-center rounded-lg bg-green-400">
            Welcome video
          </span>
        </div>

        <div className="mt-5 flex h-96 w-full items-center  justify-center rounded-lg bg-purple-400 ">
          <span className="">Global map</span>
        </div>

        <div className="relative mt-5 flex h-full justify-center">
          <span className="flex h-80 w-full items-center justify-center rounded-lg bg-violet-400">
            Testimony
          </span>
          <Button className="absolute top-52 left-9 rounded-xl bg-teal-500 px-8 py-3 font-bold uppercase text-gray-100 transition-all duration-300 hover:bg-gray-100 hover:text-teal-500">
            Reach out to us
          </Button>
        </div>

        <div className="mt-10 text-4xl font-bold">
          <h1>GIVING</h1>
        </div>

        <div className="mt-5 flex items-center justify-between gap-12">
          <span className="flex h-60 w-full items-center justify-center rounded-lg bg-blue-400">
            Internet Banking
          </span>
          <span className="flex h-60 w-full items-center justify-center rounded-lg bg-red-400">
            Snapscan
          </span>
          <span className="flex h-60 w-full items-center justify-center rounded-lg bg-pink-400">
            Sunday service
          </span>
        </div>

        <div className="mt-10 flex justify-center text-4xl font-bold">
          <span>Latest Sermon</span>
        </div>

        <div className="mt-2 flex h-full justify-center">
          <span className="flex h-64 w-full items-center justify-center rounded-lg bg-violet-400">
            Latest youtube service
          </span>
        </div>

        <div className="mt-10 text-4xl font-bold">
          <h1>RECOURSES</h1>
        </div>

        <div className="mt-5 mb-20 flex items-center justify-between gap-5">
          <span className="flex h-28 w-full items-center justify-center rounded-lg bg-blue-400">
            Youtube
          </span>
          <span className="flex h-28 w-full items-center justify-center rounded-lg bg-red-400">
            Soundcloud
          </span>
          <span className="flex h-28 w-full items-center justify-center rounded-lg bg-pink-400">
            Spotify
          </span>
          <span className="flex h-28 w-full items-center justify-center rounded-lg bg-lime-300">
            Holy bible
          </span>
          <span className="flex h-28 w-full items-center justify-center rounded-lg bg-amber-300">
            Other recourses
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
