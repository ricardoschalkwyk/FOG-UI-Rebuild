const GivingPage = () => {
  return (
    <div className="container mx-auto mb-36 flex">
      <div className="mx-24 mt-28 w-full flex-col">
        <div className="flex items-center justify-center">
          <h1 className="text-6xl font-bold text-gray-600">Giving</h1>
        </div>

        <div className="mt-14 text-center">
          <p>
            Tithes and offering is a seed sown enabling this vision to impact
            communities on a continual basis because of your obedience to
            God&rsquo;s Word. “Test me in this,” says the Lord Almighty, “and
            see if I will not throw open the floodgates of heaven and pour out
            so much blessing that there will not be room enough to store it.”
            &#45; Malachi 3:10
          </p>
        </div>

        <div className="mt-20 flex h-96 justify-center gap-5">
          <div className="flex w-full items-center justify-center rounded-lg bg-brand-teal_green">
            <span>Banking</span>
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-brand-teal_green">
            <span>Snapscan</span>
          </div>
        </div>

        <div className="mt-5 flex h-[340px] rounded-xl bg-brand-image">
          <div className="ml-10 flex flex-col items-center justify-center">
            <h2 className="text-6xl font-bold text-teal-600">
              Sunday Service Giving
            </h2>
            <p className="mt-2 w-96 pb-8 text-center text-lg text-white">
              If you feel more comfortable using this payment method, you’re
              welcome to bring your offering to church during weekend services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GivingPage;
