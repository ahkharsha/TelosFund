import React, { useState } from "react";

const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const data = await createCampaign(campaign);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <span className="coverLine"></span>
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-90 bg-gray-900">
        <svg
          className="absolute inset-x-0 bottom-0 text-gray-800"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
                Flow Fund<br className="hidden md:block" />
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                A decentralized crowdfunding platform built on the EVM on Flow blockchain, designed to empower creators, entrepreneurs, and communities by providing a secure, transparent, and efficient way to raise funds.
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-gray-800 rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold text-gray-100 sm:text-center sm:mb-6 sm:text-2xl">
                  Campaign
                </h3>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="title"
                      className="inline-block mb-1 font-medium text-gray-300"
                    >
                      Title
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          title: e.target.value,
                        })
                      }
                      placeholder="Enter campaign title"
                      required
                      type="text"
                      className="w-full h-12 px-4 mb-2 text-gray-100 bg-gray-700 border border-gray-600 rounded focus:border-purple-500 focus:outline-none focus:shadow-outline"
                      id="title"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="inline-block mb-1 font-medium text-gray-300"
                    >
                      Description
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          description: e.target.value,
                        })
                      }
                      placeholder="Enter campaign description"
                      required
                      type="text"
                      className="w-full h-12 px-4 mb-2 text-gray-100 bg-gray-700 border border-gray-600 rounded focus:border-purple-500 focus:outline-none focus:shadow-outline"
                      id="description"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="amount"
                      className="inline-block mb-1 font-medium text-gray-300"
                    >
                      Target Amount
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          amount: e.target.value,
                        })
                      }
                      placeholder="Enter target amount"
                      required
                      type="number"
                      className="w-full h-12 px-4 mb-2 text-gray-100 bg-gray-700 border border-gray-600 rounded focus:border-purple-500 focus:outline-none focus:shadow-outline"
                      id="amount"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="deadline"
                      className="inline-block mb-1 font-medium text-gray-300"
                    >
                      Deadline
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          deadline: e.target.value,
                        })
                      }
                      placeholder="Select a date"
                      required
                      type="date"
                      className="w-full h-12 px-4 mb-2 text-gray-100 bg-gray-700 border border-gray-600 rounded focus:border-purple-500 focus:outline-none focus:shadow-outline"
                      id="deadline"
                    />
                  </div>
                  <div className="mt-4 mb-2">
                    <button
                      onClick={(e) => createNewCampaign(e)}
                      type="submit"
                      className="w-full h-12 px-6 font-medium text-white transition duration-200 rounded bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline"
                    >
                      Create Campaign
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 sm:text-sm">
                    Create your campaign to raise funds.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;