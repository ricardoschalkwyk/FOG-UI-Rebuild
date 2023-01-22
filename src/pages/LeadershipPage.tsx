import { Button } from "../components";

const LeadershipPage = () => {
  return (
    <div className="container mx-auto mb-36 flex justify-center">
      <div className="mt-28 flex h-full flex-col justify-center">
        {/* Title */}
        <div className="mb-20 flex w-full justify-center">
          <h1 className="text-6xl font-bold">Our Leadership</h1>
        </div>

        <div className="mx-10 items-center justify-center gap-5 lg:flex">
          {/* Image */}
          <div className="flex w-full justify-center text-5xl font-bold text-teal-600">
            <img
              className="h-96 w-fit rounded-md"
              src="https://www.friendofgodchurch.com/wp-content/uploads/2020/12/Gerald-Family.jpg"
              alt="Image"
            />
          </div>

          {/* Text */}
          <div className="mt-5 w-full text-center">
            <p>
              Under the leadership of Gerald and Liezl, Friend of God is
              constantly growing and truly experiencing the grace of God. Gerald
              and Liezl are both passionate about Christ and seeing people come
              into relationship with Him. Away from leading they can often be
              found cheering on what they believe are three gifts which God has
              placed in their lives namely; Caleb, Amy, and Talia. They are sold
              out to ministry; however, you will often find them reminding
              others that their first call as parents is to make sure that their
              family enjoys a healthy balance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipPage;
