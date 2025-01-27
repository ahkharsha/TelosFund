import React from "react";

const Card = ({ allcampaign, setOpenModel, setDonate, title }) => {
  const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);
    return remainingDays.toFixed(0);
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <p className="py-8 text-3xl font-bold leading-5 text-black text-center border-b border-gray-700">{title}</p>
      <div className="grid gap-10 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full mt-8">
        {allcampaign?.map((campaign, i) => (
          <div
            onClick={() => (setDonate(campaign), setOpenModel(true))}
            key={i + 1}
            className="cursor-pointer border border-gray-700 overflow-hidden transition-shadow duration-300 bg-gradient-to-b from-gray-900 via-[#1a1a1a] to-black rounded-lg hover:shadow-lg hover:shadow-gray-800"
          >
            <img
              src="https://thumbs.dreamstime.com/b/monochrome-donate-icon-vector-illustration-linear-logo-charity-hand-money-coin-donation-simple-isolated-white-concept-221016561.jpg"
              className="object-cover w-full h-64 rounded-t-lg"
              alt="Campaign"
            />

            <div className="py-5 px-4 text-gray-200">
              <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
                Days Left: {daysLeft(campaign.deadline)}
              </p>
              <p className="text-2xl font-semibold mb-3 text-gray-100">
                {campaign.title}
              </p>
              <p className="mb-4 text-gray-400">
                {campaign.description}
              </p>
              <div className="flex justify-between text-sm">
                <p className="font-semibold text-gray-500">Target: {campaign.target} FLOW</p>
                <p className="font-semibold text-gray-500">Raised: {campaign.amountCollected} FLOW</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
