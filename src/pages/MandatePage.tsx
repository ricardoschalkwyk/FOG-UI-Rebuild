import { Button } from "../components";

const MandatePage = () => {
  return (
    <div className="container mx-auto mb-36 flex justify-center">
      <div className="mx-44 mt-28 flex h-full flex-col justify-center">
        {/* Title */}
        <div className="mb-20 flex w-full justify-center">
          <h1 className="text-6xl font-bold">Our Mandate</h1>
        </div>

        {/* Text */}
        <div className="flex-col items-center gap-10 lg:flex">
          <div className="w-full text-5xl font-bold text-teal-600">
            <p className="text-center">
              We love God, we love people, and we would love to see the world
              enjoy a friendship with God.
            </p>
          </div>

          <div className="w-full text-center">
            <p>
              Inspired by Matthew 28:19-20, the Friend of God family is building
              one church in many locations, in so doing, reaching our local
              communities effectively. We would love to see those around us know
              God by stepping into relationship with Jesus Christ; find freedom
              in growing their faith in Connect Groups; discover purpose by
              being encouraged to explore the scriptures and make a difference,
              by getting involved and volunteering their gift, as encouraged by
              Scripture in 1 Peter 4:10.
            </p>
            <p className="py-4">
              Our values highlight that we are Christ-Centred, going global,
              determined to reach people while consciously caring and being
              generous with our giving. We are also committed to being creative
              in any way possible to expand the fame of Jesus Christ. We always
              bring our best so that we might be recognized as being unusually
              good.
            </p>
            <p>
              Simply said, we love God, we love people, and we would love to see
              the world enjoy a friendship with God.
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="relative mt-20 flex items-center gap-4">
          <div className="h-64 w-full rounded-lg bg-blue-400">
            <Button className="absolute top-44 left-9 rounded-xl bg-gray-100 px-8 py-3 font-bold uppercase text-gray-800 transition-all duration-300 hover:bg-teal-500 hover:text-gray-100">
              Meet the team
            </Button>
          </div>

          <div className="relative flex h-64 w-full rounded-lg bg-red-400">
            <Button className="absolute top-44 left-9 rounded-xl bg-gray-100 px-8 py-3 font-bold uppercase text-gray-800 transition-all duration-300 hover:bg-teal-500 hover:text-gray-100">
              Our locations
            </Button>
          </div>
        </div>

        <div className="relative mt-20 flex justify-center">
          <span className="flex h-80 w-full items-center justify-center rounded-lg bg-red-400 text-6xl font-bold text-white">
            Get in touch with us
          </span>
          <Button className="absolute top-52 rounded-xl bg-teal-500 px-8 py-3 font-bold uppercase text-gray-100 transition-all duration-300 hover:bg-gray-100 hover:text-teal-500">
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MandatePage;
